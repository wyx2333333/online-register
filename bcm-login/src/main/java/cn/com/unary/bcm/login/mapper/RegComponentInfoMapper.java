package cn.com.unary.bcm.login.mapper;

import cn.com.unary.bcm.login.pojo.RegComponentInfo;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Administrator on 2018/10/18.
 */
@Repository
public interface RegComponentInfoMapper {

    /**
     * 获得存在的注册码信息
     */
    List<RegComponentInfo> getRegComponentInfo();

    /**
     * 添加注册码信息
     */
    void addRegCodeInfo(@Param("regComponentInfo") RegComponentInfo regComponentInfo);

}
