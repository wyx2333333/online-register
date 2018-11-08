package cn.com.unary.bcm.login.controller;

import cn.com.unary.bcm.util.http.ResponseMessage;
import cn.com.unary.bcm.util.http.Result;
import org.apache.shiro.ShiroException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

/**
 * Created with IntelliJ IDEA
 *
 * @author wyx
 * @Description 异常处理
 * @Date 2018-10-16
 * @Time
 */
@RestControllerAdvice
public class ExceptionController {

    // 捕捉shiro的异常
    @ExceptionHandler(ShiroException.class)
    public ResponseMessage handle401() {
        return Result.error("0003", "您没有权限访问！");
    }

    // 捕捉其他所有异常
    @ExceptionHandler(Exception.class)
    public ResponseMessage globalException(HttpServletRequest request, Throwable ex) {
        return Result.error(String.valueOf(getStatus(request).value()),
                "访问出错，无法访问: " + ex.getMessage());
    }

    private HttpStatus getStatus(HttpServletRequest request) {
        Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");
        if (statusCode == null) {
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.valueOf(statusCode);
    }
}
