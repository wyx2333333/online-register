package cn.com.unary.bcm.login.shiro;

import org.apache.shiro.authc.AuthenticationToken;

/**
 * @author wyx
 * @Description JWT token
 * @Date 2018-10-15
 * @Time
 */
public class JWTToken implements AuthenticationToken {
    private String token;

    public JWTToken(String token) {
        this.token = token;
    }

    @Override
    public Object getPrincipal() {
        return token;
    }

    @Override
    public Object getCredentials() {
        return token;
    }
}
