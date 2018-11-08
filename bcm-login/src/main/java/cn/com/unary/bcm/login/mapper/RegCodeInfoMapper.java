package cn.com.unary.bcm.login.mapper;

import cn.com.unary.bcm.login.pojo.RegCodeInfo;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Administrator on 2018/10/17.
 */
@Repository
public interface RegCodeInfoMapper {

    /**
     * 获得存在的注册码信息
     */
    List<RegCodeInfo> getRegCodeInfo();

    /**
     * 添加注册码信息
     */
    void addRegCodeInfo(@Param("regCodeInfo") RegCodeInfo regCodeInfo);

}
