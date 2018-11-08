package cn.com.unary.bcm.login.controller;

import cn.com.unary.bcm.login.mapper.UserMapper;
import cn.com.unary.bcm.login.shiro.JWTUtil;
import cn.com.unary.bcm.util.http.ResponseMessage;
import cn.com.unary.bcm.util.http.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


/**
 * 登录接口
 * @author wyx
 * @since 2018-10-15
 */
@RestController
@Api(description="身份认证模块")
public class LoginController {

    private final UserMapper userMapper;

    @Autowired
    public LoginController(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @ApiOperation(value="密码登录", notes="body体参数,不需要Authorization", produces = "application/json")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "username", value = "admin", required = true, paramType = "header"),
            @ApiImplicitParam(name = "password", value = "admin", required = true, paramType = "header")
    })
    @PostMapping("/login")
    public ResponseMessage login(@RequestHeader("username") String username,
                                         @RequestHeader("password") String password) {
        String realPassword = userMapper.getPassword(username);
        if (null == realPassword) {
            return Result.error("0001", "用户名错误");
        } else if (!realPassword.equals(password)) {
            return Result.error("0002", "密码错误");
        } else {
            Map<String, String> resultMap = new HashMap<>();
            resultMap.put("token", JWTUtil.createToken(username));
            return Result.success(resultMap);
        }
    }
}
