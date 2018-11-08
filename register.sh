# 自动化编译打包脚本

ROOT_PATH="" #bcm的根目录
BCM_PATH=$ROOT_PATH/bcm
WEB_PATH=$BCM_PATH/bcm-web
LOGIN_PATH=$BCM_PATH/bcm-login
LOGIN_JAR_PATH=$BCM_PATH/bcm-login/target/bcm-login-0.0.1-SNAPSHOT.jar
MAIN_JAR_PATH=$ROOT_PATH/bcm-login-0.0.1-SNAPSHOT.jar

function print () {
    echo ""
    echo "***********************************************"
    echo "******** $1"
    echo "***********************************************"
}

# 编译前端工程
function build_web () {
    print "1. build web"
    cd $WEB_PATH;
    npm i;
    npm run build;

    # 判断是否编译成功，否则退出程序
    if [ ! -d "$WEB_PATH/dist/static" ]; then
        print "build web fail"
        exit 1
    fi
}

# 编译后端工程(login)
function build_maven () {
    print "2. build spring boot"
    cd $BCM_PATH;
    mvn clean package -DskipTests;
}

# 拷贝Jar包
function copy_jar () {
    print "3. copy jar file"
    cp "$LOGIN_JAR_PATH" "$ROOT_PATH"
}

# 杀死进程
function kill_progress () {
	echo "Stop $1"
    boot_id=`ps -ef | grep java | grep $1 | grep -v grep | awk '{print $2}'`
    count=`ps -ef | grep java | grep $1 | grep -v grep | wc -l`

    if [ $count != 0 ];then
        echo "$1 process pid is:$boot_id ."
        kill $boot_id

        # 如果没干掉进程，再干一遍
        sleep 2
        boot_id=`ps -ef | grep java | grep $1 | grep -v grep | awk '{print $2}'`
        count=`ps -ef | grep java | grep $1 | grep -v grep | wc -l`
        if [ $count != 0 ];then
            echo "$1 process pid is:$boot_id ."
            kill -9 $boot_id
        fi
    fi
}

# 杀死全部进程
function kill_all () {
    print "4. shut down"
    kill_progress "$MAIN_JAR_PATH"
}

# 启动程序
function start () {
    print "5. start bcm-register"
    java -jar $MAIN_JAR_PATH
    sleep 3
    status
}

# 检查状态
function check_status () {
    count=`ps -ef | grep java | grep $1 | grep -v grep|wc -l`
    if [ $count != 0 ];then
        boot_id=`ps -ef | grep java | grep $1 | grep -v grep | awk '{print $2}'`
        echo "$1 is running... process pid is:$boot_id "
    else
        echo "$1 is not running..."
    fi
}

# 检查两个工程的状态
function status(){
    print "check status"
    check_status "$MAIN_JAR_PATH"
}

# 更新代码并编译运行
function reload () {
    build_web
    build_maven
    copy_jar
    kill_all
    start
    print "8. deploy end"
}

# 停止
function stop () {
    kill_all
}

# 重启
function restart () {
    kill_all
    start
}

# 打印帮助手册
function print_usage () {
    echo -e "\033[0;31m Usage: \033[0m  \033[0;34m sh $0 {help|start|stop|restart|status|reload} \033[0m\033[0;31m Example: \033[0m\033[0;33m sh $0 start \033[0m"
}

case $1 in
    reload)
    reload;;
    start)
    start;;
    stop)
    stop;;
    restart)
    restart;;
    status)
    status;;
    help)
    print_usage;;
    *)
esac