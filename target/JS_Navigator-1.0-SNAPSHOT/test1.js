/**
 * Project name(项目名称)：JS_Navigator
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/18
 * Time(创建时间)： 20:52
 * Version(版本): 1.0
 * Description(描述)： 无
 */

// navigator 对象中的属性
//
// 属性      	 描述
// appCodeName	返回当前浏览器的内部名称（开发代号）
// appName	      返回浏览器的官方名称
// appVersion	 返回浏览器的平台和版本信息
// cookieEnabled	返回浏览器是否启用 cookie，启用返回 true，禁用返回 false
// onLine	       返回浏览器是否联网，联网则返回 true，断网则返回 false
// platform	       返回浏览器运行的操作系统平台
// userAgent	 返回浏览器的厂商和版本信息，即浏览器运行的操作系统、浏览器的版本、名称

document.write(navigator.appCodeName + "<br>");
document.write(navigator.appName + "<br>");
document.write(navigator.appVersion + "<br>");
document.write(navigator.cookieEnabled + "<br>");
document.write(navigator.onLine + "<br>");
document.write(navigator.platform + "<br>");
document.write(navigator.userAgent + "<br>");