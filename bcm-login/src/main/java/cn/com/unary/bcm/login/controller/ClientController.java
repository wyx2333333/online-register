package cn.com.unary.bcm.login.controller;

import cn.com.unary.bcm.login.mapper.RegCodeInfoMapper;
import cn.com.unary.bcm.login.pojo.RegCodeInfo;
import cn.com.unary.bcm.login.pojo.RegComponentInfo;
import cn.com.unary.bcm.login.shiro.JWTUtil;
import cn.com.unary.bcm.util.http.ResponseMessage;
import cn.com.unary.bcm.util.http.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.apache.shiro.authz.annotation.Logical;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 代理注册激活接口
 * @author wyx
 * @since 2018-10-16
 */
@RestController
@Api(description="代理注册激活模块")
public class ClientController {

    private final RegCodeInfoMapper regCodeInfoMapper;

    @Autowired
    public ClientController(RegCodeInfoMapper regCodeInfoMapper) {
        this.regCodeInfoMapper = regCodeInfoMapper;
    }

    @ApiOperation(value="获取注册码", notes="body体参数", produces = "application/json")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "regCodeInfo", value = "{\"name\":\"admin\",\"mobile\":\"13888888888\",</br>" +
                    "\"email\":\"admin@163.com\",\"location\":\"南京\",</br>\"validPeriod\":\"1\"}"
                    , required = true, paramType="body")
    })
    @PostMapping("/registrationCode")
    @RequiresRoles(logical = Logical.OR, value = {"user", "admin"})
    public ResponseMessage createRegistrationCode(@RequestBody RegCodeInfo regCodeInfo){
        if(null == regCodeInfo || "".equals(regCodeInfo)) {
            return Result.error("401", "null");
        }
        List<RegCodeInfo> regCodeInfos = regCodeInfoMapper.getRegCodeInfo();
        for (RegCodeInfo regItem : regCodeInfos) {
            if(regItem.getName().equals(regCodeInfo.getName())
                    || regItem.getMobile().equals(regCodeInfo.getMobile())
                    || regItem.getEmail().equals(regCodeInfo.getEmail())) {
                return Result.error("0003", "用户已存在！");
            }
        }
        String regCode = JWTUtil.createToken(regCodeInfo.getName());
        regCodeInfo.setRegistrationCode(regCode);
        regCodeInfoMapper.addRegCodeInfo(regCodeInfo);
        Map<String, String> resultMap = new HashMap<>();
        resultMap.put("registrationCode", regCode);
        return Result.success(resultMap);
    }

    @ApiOperation(value="激活注册码", notes="body体参数", produces = "application/json")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "regComponentInfo", value = "{\"registrationCode\":\"266edfae2a8a6937c6fd744a7763d\"," +
                    "\"computerName\":\"WIN-HM37LAR1S3Q\",</br>" +
                    "\"sysInstallTime\":\"2018-6-23 17:46:55\",\"cpu\":\"Inter Core i3\"," +
                    "</br>\"mac\":\"1C-1B-0D-9E-29-5C \",\"ip\":\"10.10.1.38\"}"
                    , required = true, paramType="body")
    })
    @PostMapping("/activation")
    @RequiresRoles(logical = Logical.OR, value = {"user", "admin"})
    public ResponseMessage actiovation(@RequestBody RegComponentInfo regComponentInfo) {
        List<RegCodeInfo> regCodeInfos = regCodeInfoMapper.getRegCodeInfo();
        for (RegCodeInfo regItem : regCodeInfos) {
            if(regItem.getRegistrationCode().equals(regComponentInfo.getRegistrationCode())) {
                if (regItem.isActive()) {
                    return Result.error("1004", "该注册码已被激活！");
                } else {
                    //Todo validPeriod
                    return Result.success();
                }
            }
        }
        return Result.success();
    }
}
