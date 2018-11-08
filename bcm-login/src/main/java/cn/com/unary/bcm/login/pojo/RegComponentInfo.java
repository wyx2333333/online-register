package cn.com.unary.bcm.login.pojo;

/**
 * Created by Administrator on 2018/10/18.
 */
public class RegComponentInfo {

    private String id;
    private String registrationCode;
    private String computerName;
    private String sysInstallTime;
    private String cpu;
    private String mac;
    private String ip;
    private String checkComponent;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRegistrationCode() {
        return registrationCode;
    }

    public void setRegistrationCode(String registrationCode) {
        this.registrationCode = registrationCode;
    }

    public String getComputerName() {
        return computerName;
    }

    public void setComputerName(String computerName) {
        this.computerName = computerName;
    }

    public String getSysInstallTime() {
        return sysInstallTime;
    }

    public void setSysInstallTime(String sysInstallTime) {
        this.sysInstallTime = sysInstallTime;
    }

    public String getCpu() {
        return cpu;
    }

    public void setCpu(String cpu) {
        this.cpu = cpu;
    }

    public String getMac() {
        return mac;
    }

    public void setMac(String mac) {
        this.mac = mac;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getCheckComponent() {
        return checkComponent;
    }

    public void setCheckComponent(String checkComponent) {
        this.checkComponent = checkComponent;
    }
}
