<template>
    <div class="accounts">
        <div class="main">
            <!-- 顶部导览 -->
            <div class="registrantionitem">
                <router-link to="/">
                    <img class="logo" src="/static/img/logo2.png" alt="">
                </router-link>
                <ul class="clearfix">
                    <li :class="{active:index+1<=nowstate}" v-for="(item,index) in lis" :key="index">
                        <div class="bar"></div>
                        <div class="title">{{item.id+1}} {{item.text}}</div>
                        <div class="mobile-title">
                            {{item.text}} {{index+1}}/{{lis.length}}
                        </div>
                    </li>
                </ul>
            </div>
            <div class="container clearfix">
                <!-- 1.注册账号 -->
                <div v-if="nowstate==1">
                    <!-- 手机号注册 -->
                    <!-- 邮箱注册 -->
                    <div class="form-main">
                        <h3 class="page-title">
                            {{state.title}} 
                            <a class="small" @click.prevent="exchange" href="javascripe:;"> {{state.mess}}</a>
                        </h3>
                        <div v-if="state.code==0"  class="account-form">
                            <!-- 手机号 接收短信 -->
                            <div class="field-phone-group">
                                <div class="telcode-phone">
                                    <div class="telcode country-tel-codes">
                                        <a title="中国" class="country-link form-control" href="javascript:;">
                                            <span class="c">中国</span>
                                            <span class="t">+86</span>
                                        </a>
                                    </div>
                                    <div class="form-group phone">
                                        <input v-model="message_phone" v-validate="'required|phone'" type="text" placeholder="请输入手机号" name="phone" required="" class="form-control ef-valid">
                                    </div>
                                </div>
                                <div class="send-msg clearfix">
                                    <div class="form-group code has-ef-error">
                                        <input v-model="message_code" v-validate="{ required: true, regex: /^[A-Za-z0-9]{4}(?![A-Za-z0-9])$/ }"  type="text" placeholder="请输入短信验证码" required="" name="code" class="ef-error-required form-control ef-invalid">
                                    </div>
                                    <div class="form-group send-btn">
                                        <button @click="sendCode" disabled="true" class="btn btn-default btn-block" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                                            发送短信验证码
                                        </button>
                                    </div>
                                </div>
                                <div v-if="issendmess" class="form-group a-fadeIn">
                                    <button class="btn btnyuyin btn-default btn-block yuyin" disabled="" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                                        没收到短信？点此发送语音验证码
                                    </button>
                                </div>
                            </div>
                            <div v-if="errors.has('phone')"  class="form-submit-error a-flipinX">{{ errors.first('phone') }}</div>
                            <div v-if="errors.has('code')"  class="form-submit-error a-flipinX">{{ errors.first('code') }}</div>
                        </div>
                        <div  class="account-form">
                            <div v-if="state.code==1"  class="form-group has-ef-error">
                                <input  v-model="message_email" v-validate="{ required: true, email:true }" type="text" name="email" placeholder="请输入邮箱" class="ef-error-required form-control ef-invalid">
                            </div>
                            <div v-if="errors.has('email')" class="form-submit-error a-flipinX">{{ errors.first('email') }}</div>
                            <!-- 密码 -->
                            <div class="form-group">
                                <input v-model="message_password" v-validate="{required:true,min:6,max:24}" type="password" name="login_password" placeholder="密码，8-24位数字、字母或字符"   class="form-control ef-valid" >
                            </div>
                            <div v-if="errors.has('login_password')" class="form-submit-error a-flipinX">{{ errors.first('login_password') }}</div>
                            <!-- 确认密码 -->
                            <div class="form-group has-ef-error">
                                <input v-model="message_password_confirm" v-validate="{required:true,confirmed:'login_password'}" type="password" name="password_confirm" placeholder="请再次输入密码" required=""  class="ef-error-required form-control ef-dirty ef-invalid ef-touched">
                            </div>
                            <div v-if="errors.has('password_confirm')" class="form-submit-error a-flipinX">{{ errors.first('password_confirm') }}</div>
                            <!-- 邀请码 -->
                            <div class="form-group">
                                <input v-model="message_invitation_code"  type="text" name="invite" placeholder="邀请码（没有可以不用填写）" class="form-control ef-valid ef-touched">
                            </div>
                        </div>
                         <div v-if="!issendmess" class="form-meta">
                            提示：如果您接收不到短信验证码，可以<a href="javascript:;" @click="sendyuyin" >点此发送语音验证码</a>
                        </div>
                    </div>
                </div>
                <!-- 2.填写资料 -->
                <div v-if="nowstate==2">
                    <div class="form-main">
                        <h3 class="page-title">填写资料</h3>
                        <div class="form-group">
                            <input v-model="real_name" v-validate="{required:true}" placeholder="您的真实姓名，例如：王小虎" class="form-control" type="text" name="real_name" value="">
                        </div>
                        <div v-if="errors.has('real_name')" class="form-submit-error a-flipinX">{{ errors.first('real_name') }}</div>
                        <div class="real-name-pinyin">
                            <div class="form-group has-error">
                                <input v-model="pinyin_first" v-validate="{required:true,regex:/^[a-zA-Z]+$/}" placeholder="姓的拼音，例如：wang" pattern="/^[a-zA-Z]+$/" class="form-control" type="text" name="pinyin_first" value="">
                            </div>
                            <div class="form-group has-error">
                                <input v-model="pinyin_last" v-validate="{required:true,regex:/^[a-zA-Z]+$/}" placeholder="名的拼音，例如：xiaohu" pattern="/^[a-zA-Z]+$/" class="form-control" type="text" name="pinyin_last" value="">
                            </div>
                        </div>
                        <div v-if="errors.has('pinyin_first')" class="form-submit-error a-flipinX">{{ errors.first('pinyin_first') }}</div>
                        <div v-if="errors.has('pinyin_last')" class="form-submit-error a-flipinX">{{ errors.first('pinyin_last') }}</div>
                            <h3 class="form-title">
                                选择您国籍所在的国家或地区
                                <a href="javascript:;" class="instante-help-btn" title="选择您国籍所在的国家或地区">?</a>
                            </h3>
                            <div class="form-group">
                                <select v-model="country_code" v-validate="{required:true}" class="form-control" type="select" name="country_code">
                                    <option value="CHN">中国</option>
                                    <option value="MAC">澳门</option>
                                    <option value="SGP">新加坡</option>
                                    <option value="NZL">新西兰</option>
                                    <option value="THA">泰国</option>
                                    <option value="IDN">印度尼西亚</option>
                                    <option value="PHL">菲律宾</option>
                                    <option value="KOR">韩国</option>
                                    <option value="MYS">马来西亚</option>
                                    <option value="VNM">越南</option>
                                </select>
                            </div>
                            <div v-if="errors.has('country_code')" class="form-submit-error a-flipinX">{{ errors.first('country_code') }}</div>
                            <div class="form-group ios-style">
                                <input class="" checked="checked" type="checkbox" name="same_nationality_and_residence">国籍与法定居住国一致
                            </div>
                            <div data-isshow=true class="form-group has-error">
                                <select  class="form-control" type="select" name="legal_residence_country">
                                    <option value="">请选择您的法定居住国</option>
                                    <option value="CHN">中国</option>
                                    <option value="MAC">澳门</option>
                                    <option value="SGP">新加坡</option>
                                    <option value="NZL">新西兰</option>
                                    <option value="THA">泰国</option>
                                    <option value="IDN">印度尼西亚</option>
                                    <option value="PHL">菲律宾</option>
                                    <option value="KOR">韩国</option>
                                    <option value="MYS">马来西亚</option>
                                    <option value="VNM">越南</option>
                                </select>
                            </div>
                            <div class="form-group ios-style">
                                <input class="" checked="checked" type="checkbox" name="same_nationality_and_born">国籍与出生国一致
                            </div>
                            <div class="form-group has-error">
                                <select required="" class="form-control" type="select" name="born_country">
                                    <option value="">请选择您的出生国家</option>
                                    <option value="CHN">中国</option>
                                    <option value="MAC">澳门</option>
                                    <option value="SGP">新加坡</option>
                                    <option value="NZL">新西兰</option>
                                    <option value="THA">泰国</option>
                                    <option value="IDN">印度尼西亚</option>
                                    <option value="PHL">菲律宾</option>
                                    <option value="KOR">韩国</option>
                                    <option value="MYS">马来西亚</option>
                                    <option value="VNM">越南</option>
                                </select>
                            </div>
                            <div class="form-group ios-style">
                                <input class="" checked="checked" type="checkbox" name="not_us">不是法定的美国居民
                            </div>
                            <div class="a-fadeIn not-us-warning">很抱歉，法定的美国居民暂时不能在老虎证券开户，请您谅解！</div>
                            <h3 class="form-title">纳税居住地</h3>
                            <div class="form-group">
                                <select v-model="tax_residence_country" class="form-control" type="select" name="tax_residence_country">
                                    <option value="CHN">中国</option>
                                    <option value="MAC">澳门</option>
                                    <option value="SGP">新加坡</option>
                                    <option value="NZL">新西兰</option>
                                    <option value="THA">泰国</option>
                                    <option value="IDN">印度尼西亚</option>
                                    <option value="PHL">菲律宾</option>
                                    <option value="KOR">韩国</option>
                                    <option value="MYS">马来西亚</option>
                                    <option value="VNM">越南</option>
                                </select>
                            </div>
                            <div v-if="errors.has('tax_residence_country')" class="form-submit-error a-flipinX">{{ errors.first('tax_residence_country') }}</div>
                            <div class="form-group ios-style">
                                <input class="" v-model="multi_area"  type="checkbox" name="multi_area">多地区税务居民
                            </div>
                            <!-- 多地 -->
                            <div v-if="multi_area">
                                <div class="multiple-tax-country"><div>
                                    <h3 class="form-title">其他纳税居住地1</h3>
                                    <div class="mutiple-text-form">
                                        <div class="form-group">
                                            <select class="form-control" type="select" v-validate="{required: true}" v-model="m1tax_residence_country" name="1.tax_residence_country">
                                                <option value="">请选择国家或地区</option>
                                                <option value="CHN">中国</option>
                                                <option value="MAC">澳门</option>
                                                <option value="SGP">新加坡</option>
                                                <option value="NZL">新西兰</option>
                                                <option value="THA">泰国</option>
                                                <option value="IDN">印度尼西亚</option>
                                                <option value="PHL">菲律宾</option>
                                                <option value="KOR">韩国</option>
                                                <option value="MYS">马来西亚</option>
                                                <option value="VNM">越南</option>
                                            </select>
                                        </div>
                                        <div v-if="errors.has('1.tax_residence_country')" class="form-submit-error a-flipinX">{{ errors.first('1.tax_residence_country') }}</div>
                                        
                                        <div class="form-group">
                                            <input placeholder="纳税识别号" class="nssbh form-control" type="text" v-validate="{required: istrue}" v-model="m1tax_identification_number" name="1.tax_identification_number" value="" ></div>
                                            <div v-if="errors.has('1.tax_identification_number')" class="form-submit-error a-flipinX">{{ errors.first('1.tax_identification_number') }}</div>
                                            <div class="form-group ios-style">
                                                <input class="" type="checkbox" v-model="m1have_tax_identification_number" name="1.have_tax_identification_number">无纳税识别号
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="add-more clearfix">
                                        <a href="javascript:;" class="add">添加一项</a>
                                    </div> -->
                                </div>
                            </div>

                            <h3 class="form-title">身份证件</h3>
                            <div class="id_no-group clearfix">
                                <div class="form-group">
                                    <select required="" placeholder="证件类型" class="form-control" type="select" name="id_type">
                                        <option value="domestic_ids">证件类型：身份证</option>
                                    </select>
                                </div>
                                <div class="form-group ">
                                    <input v-model="id_no" v-validate="{required: true,regex:/^[xX0-9]{18}$/}" pattern="/^[xX0-9]{18}$/" placeholder="身份证号码" class="form-control" type="text" name="id_no" value="">
                                </div>
                            </div>
                            <div v-if="errors.has('id_no')" class="form-submit-error a-flipinX">{{ errors.first('id_no') }}</div>
                            <h3 class="form-title">地址信息</h3>
                            <div>
                                <div class="form-group">
                                    使用身份证作为地址证明?
                                </div>
                                <div class="form-group-control form-inline ios-style" required="">
                                    <div class="group">
                                        <input v-model="same_residence_addr" value='1'  type="radio" name="same_residence_addr">是
                                    </div>
                                    <div class="group">
                                        <input v-model="same_residence_addr"   value='0' type="radio" name="same_residence_addr">否
                                    </div>
                                </div>
                            </div>
                            <div v-if="isid" class="residence-address-box a-flyRightIn">
                                <h3 class="form-title">身份证地址</h3>
                                <div class="province-city-group clearfix">
                                    <div class="form-group">
                                        <select required="" class="form-control" type="select" name="province">
                                            <option value="">选择省份</option>
                                            <option value="北京市">北京市</option>
                                            <option value="天津市">天津市</option>
                                            <option value="河北省">河北省</option>
                                            <option value="山西省">山西省</option>
                                            <option value="内蒙古自治区">内蒙古自治区</option>
                                            <option value="辽宁省">辽宁省</option>
                                            <option value="吉林省">吉林省</option>
                                            <option value="黑龙江省">黑龙江省</option>
                                            <option value="上海市">上海市</option>
                                            <option value="江苏省">江苏省</option>
                                            <option value="浙江省">浙江省</option>
                                            <option value="安徽省">安徽省</option>
                                            <option value="福建省">福建省</option>
                                            <option value="江西省">江西省</option>
                                            <option value="山东省">山东省</option>
                                            <option value="河南省">河南省</option>
                                            <option value="湖北省">湖北省</option>
                                            <option value="湖南省">湖南省</option>
                                            <option value="广东省">广东省</option>
                                            <option value="广西壮族自治区">广西壮族自治区</option>
                                            <option value="海南省">海南省</option>
                                            <option value="重庆市">重庆市</option>
                                            <option value="四川省">四川省</option>
                                            <option value="贵州省">贵州省</option>
                                            <option value="云南省">云南省</option>
                                            <option value="西藏自治区">西藏自治区</option>
                                            <option value="陕西省">陕西省</option>
                                            <option value="甘肃省">甘肃省</option>
                                            <option value="青海省">青海省</option>
                                            <option value="宁夏回族自治区">宁夏回族自治区</option>
                                            <option value="新疆维吾尔自治区">新疆维吾尔自治区</option>
                                        </select>
                                    </div>
                                    <div class="form-group ">
                                        <select class="form-control" type="select" name="city">
                                            <option value="">选择城市</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <select required="" class="form-control" type="select" name="area">
                                            <option value="">选择地区</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input  placeholder="详细地址" class="form-control" type="text" name="residence_detail" value="">
                                </div>
                            </div>
                            <div class="form-group">
                                <input v-model="email" v-validate="{required:true,email:true}" placeholder="电子邮箱" pattern="/^(?![\-_.])[\w\-.]+@(?:(?![\-_])[\w\-一-龥]{1,63}\.)+[A-Za-z0-9]{2,}$/" class="form-control" type="text" name="email" value="">
                            </div>
                            <div v-if="errors.has('email')" class="form-submit-error a-flipinX">{{ errors.first('email') }}</div>
                            <div class="form-group">
                                <select v-model="family_member" v-validate="{required:true}"  class="form-control" type="select" name="family_member">
                                    <option value="">家庭成员个数</option>
                                    <option value="0">家庭成员个数：0</option>
                                    <option value="1">家庭成员个数：1</option>
                                    <option value="2">家庭成员个数：2</option>
                                    <option value="3">家庭成员个数：3</option>
                                    <option value="4">家庭成员个数：4</option>
                                    <option value="5">家庭成员个数：5</option>
                                </select>
                            </div>
                            <div v-if="errors.has('family_member')" class="form-submit-error a-flipinX">{{ errors.first('family_member') }}</div>
                            <div class="form-group">
                                <select v-model="marital_status" v-validate="{required:true}" class="form-control" type="select" name="marital_status">
                                    <option value="">婚姻状况</option>
                                    <option value="0">未婚</option>
                                    <option value="1">已婚</option>
                                    <option value="2">离异</option>
                                    <option value="3">丧偶</option>
                                </select>
                            </div>
                            <div v-if="errors.has('marital_status')" class="form-submit-error a-flipinX">{{ errors.first('marital_status') }}</div>
                            <div>
                                <div class="form-group">
                                    <select  v-model="job" v-validate="{required:true}" class="form-control" type="select" name="job">
                                        <option value="">就业情况</option>
                                        <option value="0">受雇</option>
                                        <option value="1">自主创业</option>
                                        <option value="2">学生/实习生</option>
                                        <option value="3">退休</option>
                                    </select>
                                </div>
                            </div>
                            <div v-if="errors.has('marital_status')" class="form-submit-error a-flipinX">{{ errors.first('marital_status') }}</div>
                            <div class="a-fadeIn">
                                <h3 class="form-title">行业与职位</h3>
                                <div>
                                    <div class="not-us-warning">提示：请选择您公司所属的行业</div>
                                    <div class="business-career clearfix">
                                        <div class="form-group business-control">
                                            <select v-model="business" v-validate="{required:true}" class="form-control" type="select" name="business">
                                                <option value="">请选择行业</option>
                                                <option value="19">信息技术</option>
                                                <option value="1">会计</option>
                                                <option value="2">汽车业</option>
                                                <option value="3">银行业</option>
                                                <option value="4">美容业</option>
                                                <option value="5">文员</option>
                                                <option value="6">设计</option>
                                                <option value="8">工程</option>
                                                <option value="9">法律</option>
                                                <option value="10">媒体/新闻/报刊/杂志</option>
                                                <option value="13">房地产</option>
                                                <option value="14">餐饮</option>
                                                <option value="17">医院</option>
                                                <option value="18">酒店业</option>
                                                <option value="20">安装/维护修理</option>
                                                <option value="21">保险</option>
                                                <option value="22">运输</option>
                                                <option value="24">旅游业</option>
                                                <option value="25">杂货业</option>
                                                <option value="29">仓库</option>
                                                <option value="30">其他</option>
                                                <option value="31">金融</option>
                                                <option value="32">警务/安全/安保</option>
                                                <option value="33">教育/科学</option>
                                            </select>
                                        </div>
                                        <div class="form-group career-control">
                                            <select v-model="career" v-validate="{required:true}"  class="form-control" type="select" name="career">
                                                <option value="">请选择职位</option>
                                                <option value="0">总监</option>
                                                <option value="1">技术人员</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div v-if="errors.has('business')" class="form-submit-error a-flipinX">{{ errors.first('business') }}</div>
                                    <div v-if="errors.has('career')" class="form-submit-error a-flipinX">{{ errors.first('career') }}</div>
                                </div>
                                <h3 class="form-title">单位信息</h3>
                                <div class="form-group">
                                    <input  v-model="company" v-validate="{required:true}"  placeholder="单位名称" class="form-control" type="text" name="company" value="">
                                </div>
                                <div v-if="errors.has('company')" class="form-submit-error a-flipinX">{{ errors.first('company') }}</div>
                                <div class="province-city-group clearfix">
                                    <div class="form-group">
                                        <select v-model="province" v-validate="{required:true}" class="form-control" type="select" name="province">
                                            <option value="">选择省份</option>
                                            <option value="北京市">北京市</option>
                                            <option value="天津市">天津市</option>
                                            <option value="河北省">河北省</option>
                                            <option value="山西省">山西省</option>
                                            <option value="内蒙古自治区">内蒙古自治区</option>
                                            <option value="辽宁省">辽宁省</option>
                                            <option value="吉林省">吉林省</option>
                                            <option value="黑龙江省">黑龙江省</option>
                                            <option value="上海市">上海市</option>
                                            <option value="江苏省">江苏省</option>
                                            <option value="浙江省">浙江省</option>
                                            <option value="安徽省">安徽省</option>
                                            <option value="福建省">福建省</option>
                                            <option value="江西省">江西省</option>
                                            <option value="山东省">山东省</option>
                                            <option value="河南省">河南省</option>
                                            <option value="湖北省">湖北省</option>
                                            <option value="湖南省">湖南省</option>
                                            <option value="广东省">广东省</option>
                                            <option value="广西壮族自治区">广西壮族自治区</option>
                                            <option value="海南省">海南省</option>
                                            <option value="重庆市">重庆市</option>
                                            <option value="四川省">四川省</option>
                                            <option value="贵州省">贵州省</option>
                                            <option value="云南省">云南省</option>
                                            <option value="西藏自治区">西藏自治区</option>
                                            <option value="陕西省">陕西省</option>
                                            <option value="甘肃省">甘肃省</option>
                                            <option value="青海省">青海省</option>
                                            <option value="宁夏回族自治区">宁夏回族自治区</option>
                                            <option value="新疆维吾尔自治区">新疆维吾尔自治区</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <select v-model="company_city" v-validate="{required:true}" class="form-control" type="select" name="company_city">
                                            <option value="">选择城市</option>
                                            <option value="0">太原</option>
                                            <option value="1">临汾</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <select v-model="company_area" v-validate="{required:true}" class="form-control" type="select" name="company_area">
                                            <option value="">选择地区</option>
                                            <option value="0">小店区</option>
                                            <option value="1">杏花岭区</option>
                                        </select>
                                    </div>
                                </div>
                                <div v-if="errors.has('province')" class="form-submit-error a-flipinX">{{ errors.first('province') }}</div>
                                <div v-if="errors.has('company_city')" class="form-submit-error a-flipinX">{{ errors.first('company_city') }}</div>
                                <div v-if="errors.has('company_area')" class="form-submit-error a-flipinX">{{ errors.first('company_area') }}</div>
                                <div class="form-group">
                                    <input v-model="work_address_detail" v-validate="{required:true}" placeholder="单位详细地址" class="form-control" type="text" name="work_address_detail" value="">
                                </div>
                                <div v-if="errors.has('work_address_detail')" class="form-submit-error a-flipinX">{{ errors.first('work_address_detail') }}</div>
                            </div>
                            <h3 class="form-title">合规信息</h3>
                            <div class="form-group">
                                账户所有人本人及其直系亲属是否为登记的证券经纪人，证券交易所、监管组织、证券或商品经纪公司的员工、关联人员、利害关系人？
                            </div>
                            <div class="form-group-control form-inline ios-style" required="">
                                <div class="group">
                                    <input type="radio" v-model="regulatory_members_checked" v-validate="{required:true}" value='1' name="regulatory_members_checked">是
                                </div>
                                <div class="group">
                                    <input type="radio" v-model="regulatory_members_checked" v-validate="{required:true}" value="0" name="regulatory_members_checked">否
                                </div>
                            </div>
                            <div v-if="errors.has('regulatory_members_checked')" class="form-submit-error a-flipinX">{{ errors.first('regulatory_members_checked') }}</div>
                            <div class="form-group">账户持有人是否是一家公共上市公司的董事，持10%股权的股东或决策人？</div>
                            <div class="form-group-control form-inline ios-style" required="">
                                <div class="group">
                                    <input type="radio" v-model="regulatory_stockholder_checked" v-validate="{required:true}" value='1' name="regulatory_stockholder_checked">是
                                </div>
                                <div class="group">
                                    <input type="radio" v-model="regulatory_stockholder_checked" v-validate="{required:true}" value='0' name="regulatory_stockholder_checked">否
                                </div>
                            </div>
                            <div v-if="errors.has('regulatory_stockholder_checked')" class="form-submit-error a-flipinX">{{ errors.first('regulatory_stockholder_checked') }}</div>
                    </div>
                </div>
                <!-- 3.选择账户 -->
                <div v-if="nowstate==3">
                    <div class="form-main">
                        <h3 class="page-title">选择账户类型</h3>
                        <div clas   s="form-group">
                            <select v-model="trade_channel" v-validate="{required:true}" type="select" name="trade_channel" class="form-control ef-valid">
                                <option value="ib" selected="">老虎环球账户</option>
                                <option value="bs_cash">老虎标准账户</option>
                            </select>
                        </div>
                        <div v-if="errors.has('trade_channel')" class="form-submit-error a-flipinX">{{ errors.first('trade_channel') }}</div>
                        <h3 class="form-title">您将拥有以下权益：</h3>
                        <ul  class="list-items">
                            <li>一笔钱交易美股/港股/A股（沪港通&amp;深港通）</li>
                            <li>支持融资交易，最高4倍杠杆，利率低至5%</li>
                            <li>支持融券做空，买涨卖空双向操作均盈利</li>
                            <li>交易品种丰富，支持美股期权等衍生品交易</li>
                        </ul>
                    </div>
                </div>
                <!-- 4.投资信息 -->
                <div v-if="nowstate==4" class="form-main">
                    <h3 class="page-title">投资信息</h3>
                    <h3 class="form-title">股票投资经验</h3>
                    <div class="form-group has-ef-error">
                        <select type="select" name="stk_trade_year" v-model="stk_trade_year" v-validate="{ required: true }" min="1" max="3" class="ef-error-required form-control ef-placeholder ef-invalid">
                            <option value="">股票交易年数</option>
                            <option value="0">交易年数: 0</option>
                            <option value="1">交易年数: 1</option>
                            <option value="2">交易年数: 2</option>
                            <option value="3">交易年数: 3</option>
                            <option value="4">交易年数: 4</option>
                            <option value="5">交易年数: 5</option>
                            <option value="6">交易年数: 6 - 10年</option>
                            <option value="7">交易年数: 10年以上</option>
                        </select>
                    </div>
                    <div v-if="errors.has('stk_trade_year')" class="form-submit-error a-flipinX">{{ errors.first('stk_trade_year') }}</div>
                    <div class="form-group has-ef-error">
                        <select v-model="stk_trade_per_year" v-validate="{ required: true }" type="select" name="stk_trade_per_year"  min="1" class="ef-error-required form-control ef-placeholder ef-invalid">
                            <option value="">股票年交易次数</option>
                            <option value="0">小于100次</option>
                            <option value="1">大于100次</option>
                        </select>
                    </div>
                    <div v-if="errors.has('stk_trade_per_year')" class="form-submit-error a-flipinX">{{ errors.first('stk_trade_per_year') }}</div>
                    <div class="form-group has-ef-error">
                        <select type="select" name="stk_kl" v-model="stk_kl" v-validate="{ required: true }" min="1" class="ef-error-required form-control ef-placeholder ef-invalid">
                            <option value="">股票交易知识水平</option>
                            <option value="0">受限</option>
                            <option value="1">良好</option>
                            <option value="1">丰富</option>
                        </select>
                    </div>
                    <div v-if="errors.has('stk_kl')" class="form-submit-error a-flipinX">{{ errors.first('stk_kl') }}</div>
                    <h3 class="form-title">净资产与净收入</h3>
                    <div class="asset-group">
                        <div class="label">
                            <h4>净流动资产</h4>
                            <p>您手上持有的现金、能变现的股票和理财产品的资产总和</p>
                        </div>
                        <div class="form-group has-ef-error">
                            <select type="select"  name="net_current_assets" v-model="net_current_assets" v-validate="{ required: true }" min="1" class="ef-error-required form-control ef-placeholder ef-invalid">
                                <option value="">请选择</option>
                                <option value="0">0 - 2万美元</option>
                                <option value="1">2万 - 5万美元</option>
                                <option value="2">5万 - 7.5万美元</option>
                                <option value="3">7.5万 - 10万美元</option>
                                <option value="4">10万 - 25万美元</option>
                                <option value="5">25万 - 50万美元</option>
                                <option value="6">50万 - 100万美元</option>
                                <option value="7">100万 - 500万美元</option>
                                <option value="8">大于500万美元</option>
                            </select>
                        </div>
                        <div v-if="errors.has('net_current_assets')" class="form-submit-error a-flipinX">{{ errors.first('net_current_assets') }}</div>
                    </div>
                    <div class="asset-group">
                        <div class="label">
                            <h4>净资产</h4>
                            <p>去除您的负债、贷款以及房屋贷款后的资产总和</p>
                        </div>
                        <div class="form-group has-ef-error">
                            <select type="select" name="net_assets" v-model="net_assets" v-validate="{ required: true }" class="ef-error-required form-control ef-placeholder ef-invalid">
                                <option value="">请选择</option>
                                <option value="0">0 - 2万美元</option>
                                <option value="1">2万 - 5万美元</option>
                                <option value="2">5万 - 7.5万美元</option>
                                <option value="3">7.5万 - 10万美元</option>
                                <option value="4">10万 - 25万美元</option>
                                <option value="5">25万 - 50万美元</option>
                                <option value="6">50万 - 100万美元</option>
                                <option value="7">100万 - 500万美元</option>
                                <option value="8">500万 - 1000万美元</option>
                                <option value="9">1000万 - 2500万美元</option>
                                <option value="10">2500万 - 3000万美元</option>
                                <option value="11">3000万 - 5000万美元</option>
                                <option value="12">大于5000万美元</option>
                            </select>
                        </div>
                        <div v-if="errors.has('net_current_assets')" class="form-submit-error a-flipinX">{{ errors.first('net_assets') }}</div>
                    </div>
                    <div class="asset-group">
                        <div class="label">
                            <h4>总资产</h4>
                            <p>包含您负债和贷款的资产总和</p>
                        </div>
                        <div class="form-group has-ef-error">
                            <select type="select" name="total_assets" v-model="total_assets" v-validate="{ required: true }" class="ef-error-required form-control ef-placeholder ef-invalid">
                                <option value="">请选择</option>
                                <option value="0">0 - 2万美元</option>
                                <option value="1">2万 - 5万美元</option>
                                <option value="2">5万 - 7.5万美元</option>
                                <option value="3">7.5万 - 10万美元</option>
                                <option value="4">10万 - 25万美元</option>
                                <option value="5">25万 - 50万美元</option>
                                <option value="6">50万 - 100万美元</option>
                                <option value="7">100万 - 500万美元</option>
                                <option value="8">500万 - 1000万美元</option>
                                <option value="9">1000万美元 - 2500万美元</option>
                                <option value="10">2500万美元 - 5000万美元</option>
                                <option value="11">大于5000万美元</option>
                            </select>
                        </div>
                        <div v-if="errors.has('total_assets')" class="form-submit-error a-flipinX">{{ errors.first('total_assets') }}</div>
                    </div>
                    <div class="asset-group">
                        <div class="label">
                            <h4>净年收入</h4>
                            <p>税后的年收入</p>
                        </div>
                        <div class="form-group has-ef-error">
                            <select type="select" name="net_year_income" v-model="net_year_income" v-validate="{ required: true }" min="1" class="ef-error-required form-control ef-placeholder ef-invalid">
                                <option value="">请选择</option>
                                <option value="0">0 - 4万美元</option>
                                <option value="1">4万 - 4.5万美元</option>
                                <option value="2">4.5万 - 5万美元</option>
                                <option value="3">5万 - 10万美元</option>
                                <option value="4">10万 - 15万美元</option>
                                <option value="5">15万 - 25万美元</option>
                                <option value="6">25万 - 50万美元</option>
                                <option value="7">50万 - 100万美元</option>
                                <option value="8">大于100万美元</option>
                            </select>
                        </div>
                        <div v-if="errors.has('net_year_income')" class="form-submit-error a-flipinX">{{ errors.first('net_year_income') }}</div>
                    </div>
                    <h3 class="form-title">
                        投资目标
                        <a href="javascript:;" class="instante-help-btn" title="点击查看更多说明">?</a>
                    </h3>
                    <div class="ef-error-required form-group-control ef-invalid form-inline has-ef-error">
                        <div class="form-group">
                            <label>
                                <input label="投机" name="invest_target" v-model="invest_target" v-validate="{ required: true }"  type="checkbox"  class="ef-valid" value="0">投机</label>
                            </div>
                            <div class="form-group">
                                <label>
                                    <input label="交易利润" name="invest_target" v-model="invest_target" v-validate="{ required: true }" type="checkbox"  class="ef-valid" value="1">交易利润
                                </label>
                            </div>
                            <div class="form-group">
                                <label>
                                    <input label="长线收益" name="invest_target" v-model="invest_target" v-validate="{ required: true }" type="checkbox"  class="ef-valid" value="2">长线收益
                                </label>
                            </div>
                            <div class="form-group">
                                <label>
                                    <input label="对冲" name="invest_target" v-model="invest_target" v-validate="{ required: true }" type="checkbox"  class="ef-valid" value="3">对冲
                                </label>
                            </div>
                            <div class="form-group">
                                <label>
                                    <input label="股息收入" name="invest_target" v-model="invest_target" v-validate="{ required: true }" type="checkbox"  class="ef-valid" value="4">股息收入
                                </label>
                            </div>
                            <div class="form-group">
                                <label>
                                    <input label="低风险保值" name="invest_target" v-model="invest_target" v-validate="{ required: true }" type="checkbox"  class="ef-valid" value="5">低风险保值
                                </label>
                        </div>
                            <div v-if="errors.has('invest_target')" class="form-submit-error a-flipinX">{{ errors.first('invest_target') }}</div>
                    </div>
                </div>
                <!-- 5.阅读协议 -->
                <div v-if="nowstate==5" class="form-main">
                    <h3 class="page-title">老虎证券客户协议</h3>
                    <div class="agreement-group opened">
                        <a href="javascript:;" class="title">法律承认</a>
                        <div class="content">
                            <p class="p1">盈透之所以能够保持低廉的佣金结构，是因为我们建立了自动交易流程以在最大程度上减少人为干预及决策。从这点出发，我们建立了若干管理盈透所有账户的简单条款。这些规则承认由于电子系统的自身特质(常常依赖于第三方连接)，系统有时可能无法工作或发生延迟。交易所和数据提供方也可能出错。</p>
                            <p class="p1">客户有义务接受所有按本人或本人授权代表的定单指令进行的定单执行结果。
                                <span class="s1"><br> </span>尽管我们相信同行业中我们的故障几率最低，但事实上任何系统都可能偶尔故障，且常常是由人力不可控因素造成。因此盈透不对系统或网络错误负责，且要求最高级别可靠性的客户，须同意设置备用交易设施。
                                <span class="s1"> <br> </span>客户有责任对用户名和密码进行保密。并对由第三方使用其用户名和密码进行的交易负责。
                                <span class="s1"> <br> </span>盈透已确认交易执行，但随后交易被交易所，交易网络或监管当局取消，这种情况下，盈透确认的交易也被视为取消。<span class="s1"> <br> </span>盈透通常按照接收顺序处理定单，包括盈透及其子公司提交的所有定单。<span class="s1"> <br> </span>如果定单延迟传送，或定单传送受到了数据通信故障的影响，盈透不保证限价定单获得执行。<span class="s1"> <br> </span>盈透不提供交易，投资或税务建议，客户不应听信盈透员工意图提供此类建议的言论。<span class="s1"> <br> </span>盈透通常不会发出保证金追缴通知，对余额不足，不符合监管当局或盈透保证金要求的账户，盈透保留不经事先通知即立即平仓所有头寸的权利，盈透不对此举负责。考虑到市场或其他因素，盈透可自行决定发出保证金追缴通知且<span class="s1">/</span>或不强制平仓账户头寸。如果您收到了保证金追缴通知，您必须立即存入资金以补足保证金。<span class="s1"> <br> </span>盈透客户须负责确保提供给盈透的信息的精确性和最新性。 盈透客户确保盈透知悉其当前使用的电邮地址，以便随时接收并查看盈透发出的电子邮件
                            </p>
                        </div>
                        <div class="form-group-control form-inline ios-style" pattern="/^1$/" required="">
                            <div class="group">
                                <input type="radio" value="1" v-model="agreement_0" v-validate="{required:true}" name="agreement_0">本人同意</div>
                            <div class="group">
                                <input type="radio" value="0" v-model="agreement_0" v-validate="{required:true}" name="agreement_0">本人不同意
                            </div>
                        </div>
                        <div v-if="errors.has('agreement_0')" class="form-submit-error a-flipinX">{{ errors.first('agreement_0') }}</div>
                    </div>
                        <div class="agreement-group opened">
                            <a href="javascript:;" class="title">账户交易控制及所有权证明</a>
                            <div class="content"><p style="text-align: left;">作为规管证券与商品期货经纪商，盈透证券按规定必须知悉每个客户账户中控制日常交易的主体及每个账户中所有权益的主要拥有人。&nbsp;<br>账户持有人声明账户持有人是账户中所有资产的唯一拥有人。&nbsp;<br>账户持有人声明，仅账户持有人对账户有交易控制权，除非账户持有人使用盈透证券网站提供的相关表格授予其他人交易权限。&nbsp;</p>
                                <p style="text-align: left;"></p>
                                <p style="text-align: left;">老虎证券将自<span lang="EN-US">2017</span>年<span lang="EN-US">11</span>月<span lang="EN-US">1</span>日起至<span lang="EN-US">2017</span>年<span lang="EN-US">12</span>月<span lang="EN-US">31</span>日期间为其所有客户统一安排账户升级。如您在此账户升级期内开户的，我们将为您打造最佳的过渡体验；账户升级完成后，老虎证券<span lang="EN-US">/Top Capital Partners Limited</span>将继续为您提供优质、高效、全面、安全的服务。</p></div>
                            <div class="form-group-control form-inline ios-style" pattern="/^1$/" required="">
                                <div class="group">
                                    <input type="radio" value="1" v-model="agreement_1" v-validate="{required:true}" name="agreement_1">本人同意
                                    </div>
                                <div class="group">
                                    <input type="radio" value="0" v-model="agreement_1" v-validate="{required:true}" name="agreement_1">本人不同意
                                    </div>
                            </div>
                            <div v-if="errors.has('agreement_1')" class="form-submit-error a-flipinX">{{ errors.first('agreement_1') }}</div>
                        </div>
                        <div class="agreement-group opened">
                            <a href="javascript:;" class="title">保证金披露</a>
                            <div class="content"><p class="p1">由于您指定了保证金交易许可，您必须阅读并表示您接受保证金交易披露文件。请阅读下面的文件并在底部确认您接受该文件。</p>
                                <p class="p1">该披露基于美国金融业监管局(<span class="s1">"FINRA"</span>)的样本披露，主要介绍保证金账户交易的固有风险，包括盈透会在不通知客户的情况下平仓保证金不足的账户。</p>
                                <p class="p2">DISCLOSURE OF RISKS OF MARGIN TRADING</p>
                                <p class="p2">Interactive Brokers <span class="s2">(“</span>IB<span class="s2">”)</span> is furnishing this document to you to provide some basic facts about purchasing securities and futures contracts on margin<span class="s2">,</span> and to alert you to the risks involved with trading in a margin account. <span class="s2">“</span>Margin trading<span class="s2">”</span> can mean engaging in a transaction in which securities are purchased partially through a margin loan extended to you by IB<span class="s2">,</span> for which the securities act as collateral. Margin trading can also mean trading investment products such as futures or options in which an initial <span class="s2">“</span>margin<span class="s2">”</span> deposit is made to secure your obligations and further margin may be required to secure your obligations as the value of your positions changes.</p>
                                <p class="p2">This document also describes special risks associated with trading on margin in an IRA account<span class="s2">,</span> as described below.</p>
                                <p class="p2">Before trading stocks<span class="s2">,</span> futures or other investment products in a margin account<span class="s2">,</span> you should carefully review the margin agreement provided by IB and you should consult IB regarding any questions or concerns you may have with your margin accounts.</p>
                                <p class="p2">When you purchase securities<span class="s2">,</span> you may pay for the securities in full or you may borrow part of the purchase price from IB. If you choose to borrow funds from IB<span class="s2">,</span> you will open a margin account with the firm. The securities purchased are IB<span class="s2">’</span>s collateral for the loan to you. If the securities or futures contracts in your account decline in value<span class="s2">,</span> so does the value of the collateral supporting your loan<span class="s2">,</span> and<span class="s2">,</span> as a result<span class="s2">,</span> IB can take action<span class="s2">,</span> such as sell securities or other assets in any of your accounts held with IB or issue a margin call<span class="s2">,</span> in order to maintain the required equity in the account.</p>
                                <p class="p2">You should understand that pursuant to the IB Margin Agreement<span class="s2">,</span> IB generally will not issue margin calls<span class="s2">,</span> that IB will not credit your account to meet intraday margin deficiencies<span class="s2">,</span> and that IB generally will liquidate positions in your account in order to satisfy margin requirements without prior notice to you and without an opportunity for you to choose the positions to be liquidated or the timing or order of liquidation.</p>
                                <p class="p2">In addition<span class="s2">,</span> it is important that you fully understand the risks involved in trading securities or futures contracts on margin. These risks include the following:</p>
                                <p class="p2">You can lose more funds than you deposit in the margin account. A decline in the value of securities or futures contracts that are purchased on margin may require you to provide additional funds to IB or you must put up margin to avoid the forced sale of those securities or futures contracts or other assets in your account<span class="s2">(</span>s<span class="s2">)</span>.</p>
                                <p class="p2">IB can force the sale of securities or other assets in your account<span class="s2">(</span>s<span class="s2">)</span>. If the equity in your account falls below the maintenance margin requirements<span class="s2">,</span> or if IB has higher <span class="s2">“</span>house<span class="s2">”</span> requirements<span class="s2">,</span> IB can sell the securities or futures contracts or other assets in any of your accounts held at the firm to cover the margin deficiency. You also will be responsible for any shortfall in the account after such a sale.</p>
                                <p class="p2">IB can sell your securities or other assets without contacting you. Some investors mistakenly believe that a firm must contact them for a margin call to be valid<span class="s2">,</span> and that the firm cannot liquidate securities or other assets in their accounts to meet the call unless the firm has contacted them first. This is not the case. As noted above<span class="s2">,</span> IB generally will not issue margin calls and can immediately sell your securities or futures contracts without notice to you in the event that your account has insufficient margin.</p>
                                <p class="p2">You are not entitled to choose which securities or futures contracts or other assets in your account<span class="s2">(</span>s<span class="s2">)</span> are liquidated or sold to meet a margin call. IB has the right to decide which positions to sell in order to protect its interests.</p>
                                <p class="p2">IB can increase its <span class="s2">“</span>house<span class="s2">”</span> maintenance margin requirements at any time and is not required to provide you with advance written notice. These changes in firm policy often take effect immediately. Your failure to maintain adequate margin in the event of an increased margin rate generally will cause IB to liquidate or sell securities or futures contracts in your account<span class="s2">(</span>s<span class="s2">)</span>.</p>
                                <p class="p2">If IB chooses to issue a margin call rather than immediately liquidating undermargined positions<span class="s2">,</span> you are not entitled to an extension of time on the margin call.</p>
                                <p class="p2">Special Risks of Trading on Margin in an IRA Account:</p>
                                <p class="p2">Margin Trading in an IRA Account May Not Be Suitable Depending on Your Financial Circumstances. Trading requiring margin <span class="s2">(</span>including futures trading and short option trading<span class="s2">)</span> involves a high degree of risk and may result in a loss of funds greater than the amount you have deposited in your IRA account. You must determine whether trading on margin in an IRA account is advisable based on your financial circumstances<span class="s2">,</span> your tolerance for risk<span class="s2">,</span> the number of years until your retirement<span class="s2">,</span> and other factors. You should consult a professional financial advisor to determine if margin trading in your IRA account is consistent with your financial goals.</p>
                                <p>&nbsp;</p>
                                <p class="p2">You Must Closely Monitor Your Account and Your Trading to Avoid Adverse Tax Consequences: Trading requiring margin <span class="s2">(</span>including futures trading and short option trading<span class="s2">)</span> may require the deposit of additional funds to your account to maintain sufficient margin. At the same time<span class="s2">,</span> provisions of the Internal Revenue Code place limits on the amount of funds that can be deposited to an IRA account. Deposits to the account in excess of such limits may cause adverse tax consequences<span class="s2">,</span> including but not limited to<span class="s2">,</span> forfeiture of the tax-advantaged status of the IRA account and/or penalties. As described above<span class="s2">,</span> IB will liquidate positions in your account in the event that you cannot or do not deposit sufficient funds to satisfy margin requirements.</p></div>
                            <div class="form-group-control form-inline ios-style" pattern="/^1$/" required="">
                                <div class="group">
                                    <input type="radio" value="1" v-model="agreement_2" v-validate="{required:true}" name="agreement_2">本人同意</div>
                                <div class="group">
                                    <input type="radio" value="0" v-model="agreement_2" v-validate="{required:true}" name="agreement_2">本人不同意</div>
                                </div>
                                 <div v-if="errors.has('agreement_2')" class="form-submit-error a-flipinX">{{ errors.first('agreement_2') }}</div>
                            </div>
                            <div class="agreement-group opened">
                                <a href="javascript:;" class="title">客户协议</a>
                                <div class="content">
                                    <p class="p1">Interactive Brokers LLC Customer Agreement <span class="s1">盈透证券有限公司客户协议</span></p>
                                    <p class="p1">1. Customer Agreement: This Agreement <span class="s1">(</span>"Agreement"<span class="s1">)</span> governs the relationship between Customer and Interactive Brokers LLC <span class="s1">(</span>"IB"<span class="s1">)</span>. If this Agreement varies from the IB website<span class="s1">,</span> this Agreement controls. This Agreement cannot be amended or waived except in writing by an IB officer. Customer Service employees cannot amend or waive any part of this Agreement. Customer acknowledges that IB may revise this Agreement by sending notice of the revised Agreement by e-mail or upon Customer log-in. Customer's use of IB after such notice constitutes acceptance of the revised Agreement. <br> <span class="s1">客户协议：本协议(以下简称为</span>" <span class="s1">协议</span>" <span class="s1">)用于管辖客户与盈透证券有限公司(以下简称为</span> " <span class="s1">盈</span> <span class="s1">透</span>" <span class="s1">)之间的关系。如本协议与盈透网站的内容有不一致之处，以本协议为准。除非经过盈透管理人员以书面形式提出，否则不可对本协议进行修改或放弃。客服人员不可修改或放弃本协议的任何部分。客户确认盈透可通过电子邮件发送修改协议通知或在客户登录后修改本协议。客户在上述通知后使用盈透服务被视为接受修改后的协议。</span></p>
                                    <p class="p1">2. No Investment<span class="s1">,</span> Tax or Trading Advice: IB representatives are not authorized to provide investment<span class="s1">,</span> tax or trading advice or to solicit orders. Nothing on IB's website is a recommendation or solicitation to buy or sell securities<span class="s1">,</span> futures or other investments. <br> <span class="s1">不提供投资、税务或交易建议：</span> <span class="s1">盈透代表未获授权提供投资、税务或交易建议或招揽定</span> <span class="s1">单。盈透网站上的任何内容均不可视为购买或出售证券、期货或其它投资产品的一种建</span> <span class="s1">议或招揽。</span></p>
                                    <p class="p1">3. Responsibility for Customer Orders/Trades: Customer acknowledges that IB does not know whether someone entering orders with Customer's user name/password is Customer. Unless IB is notified and agrees<span class="s1">,</span> Customer will not allow anyone to access Customer's account. Customer is responsible for the confidentiality and use of Customer's user name/password and agrees to report any theft/loss of such user name/password<span class="s1">,</span> or any unauthorized access to Customer's account<span class="s1">,</span> immediately by telephone or electronically through the IB website. Customer remains responsible for all transactions entered using Customer's user name/password. <br> <span class="s1">客户定单</span>/<span class="s1">交易责任：</span> <span class="s1">客户确认盈透并不知晓使用客户的用户名或密码输定单的人是否</span> <span class="s1">为</span> <span class="s1">客户本人。除非盈透公司已被告知并同意，否则客户应不允许任何人进入其账户。客</span> <span class="s1">户本人负责其用户名／密码的保密性与使用，并同意如上述用户名／密码被窃取或遗失</span> <span class="s1">或出现非法进入客户账户的情况，立即通过电话或通过盈透网站以电子方式报告。客户</span> <span class="s1">对使用其用户名／密码所进行的所有交易负责。</span></p>
                                    <p class="p1">4. Order Routing: Unless otherwise directed<span class="s1">,</span> IB will select the market/dealer to which to route Customer's orders. For products traded at multiple markets<span class="s1">,</span> IB may provide "Smart Routing"<span class="s1">,</span> which seeks the best market for each order through a computerized algorithm. Customer should choose Smart Routing if available. If Customer directs orders to a particular market<span class="s1">,</span> Customer assumes responsibility for knowing and trading in accordance with the rules and policies of that market <span class="s1">(</span>e.g.<span class="s1">,</span> trading hours<span class="s1">,</span> order types<span class="s1">,</span> etc.<span class="s1">)</span>. IB cannot guarantee execution of every order at the best posted price: IB may not have access to every market/dealer<span class="s1">;</span> other orders may trade ahead<span class="s1">;</span> market centers may not honor posted prices or may re-route orders for manual handling<span class="s1">;</span> or market rules<span class="s1">,</span> decisions or system failures may prevent/delay execution of Customer's orders or cause orders not to receive the best price. <br> <span class="s1">定单传递：</span> <span class="s1">除非是直接传递，否则盈透将选择传递客户定单的市场／交易商。对于在多</span> <span class="s1">个市场交易的产品，盈透可能会提供“智能传递”手段，这一操作通过计算机算法为每</span> <span class="s1">个</span> <span class="s1">定单寻找最佳市场。在可用的情况下客户应选择智能传递。如客户将定单直接发送至</span> <span class="s1">一</span> <span class="s1">个特定的市场，则客户应承担知晓以及根据该市场的规定与政策进行交易的责任（如</span> <span class="s1">交</span> <span class="s1">易时间、定单类型等）。盈透不能保证所有定单均以最佳的公布价格执行，这是因</span> <span class="s1">为：</span> <span class="s1">盈透可能不能进入所有市场／交易商；其它定单可能提前交易；市场中心可能不认</span> <span class="s1">可公</span> <span class="s1">布价或可能重新发送定单进行手工操作；或市场规则、决定或系统故障可能防止／</span> <span class="s1">延迟</span> <span class="s1">客户定单的执行或导致定单不能接收最佳价格。</span></p>
                                    <p class="p1">5. Order Cancellation/Modification: Customer acknowledges that it may not be possible to cancel/modify an order and that Customer is responsible for executions notwithstanding a cancel/modify request. <br> <span class="s1">定单取消</span>/<span class="s1">修改：</span> <span class="s1">客户确认可能无法取消／修改定单，并且尽管发出定单取消／修改要</span> <span class="s1">求，客户仍需对定单的执行结果负责。</span></p>
                                    <p class="p1">6. Order Execution: IB shall execute Customer orders as agent<span class="s1">,</span> unless otherwise confirmed. IB can execute Customer orders as principal. IB may use another broker<span class="s1">,</span> or an affiliate<span class="s1">,</span> to execute orders<span class="s1">,</span> and they have benefit of all IB's rights hereunder. IB may decline any Customer order<span class="s1">,</span> or terminate Customer's use of IB's services at any time in IB's discretion. All transactions are subject to rules and policies of relevant markets and clearinghouses<span class="s1">,</span> and applicable laws and regulations. IB IS NOT LIABLE FOR ANY ACTION OR DECISION OF ANY EXCHANGE<span class="s1">,</span> MARKET<span class="s1">,</span> DEALER<span class="s1">,</span> CLEARINGHOUSE OR REGULATOR. <br> <span class="s1">定单执行：</span> <span class="s1">除非由客户另外确认，否则盈透应作为代理执行客户定单。</span> <span class="s1">盈透可以作为</span> <span class="s1">执</span> <span class="s1">行客户定单的首要机构。盈透还可使用另一经纪商或一个分公司执行定单，且他们享</span> <span class="s1">有所有盈透的权利。盈透可自行决定拒绝任何客户定单或在任何时候终止客户使用盈透</span> <span class="s1">的服务。所有交易应遵守相关市场或清算机构的规定、政策及适用的法规。盈透对任何</span> <span class="s1">交易所、市场、交易商、清算机构或监管机构的任何行动或决定不承担责任。</span></p>
                                    <p class="p1">7. Confirmations:<br> <span class="s1">确认</span><br> A. Customer agrees to monitor each order until IB confirms execution or cancellation. Customer acknowledges that confirmations of executions or cancellations may be delayed or may be erroneous <span class="s1">(</span>e.g. due to computer system issues<span class="s1">)</span> or may be cancelled/adjusted by an exchange. Customer is bound by the actual order execution<span class="s1">,</span> if consistent with Customer's order. If IB confirms execution or cancellation in error and Customer delays reporting such error<span class="s1">,</span> IB reserves the right to remove the trade from the account or require Customer to accept the trade<span class="s1">,</span> in IB's discretion. <br> <span class="s1">客户同意监视每个定单直至盈透确认执行或取消定单。客户知晓执行或取消的</span> <span class="s1">确认可</span> <span class="s1">能会被延误或可能发生错误（如由于计算机系统问题所引起）或可能被交易所取消／整。</span> <span class="s1">如实际执行的定单与客户的定单一致，客户应对实际执行的定单负责。如盈透确认执行或</span> <span class="s1">取消有错误，且客户延迟报告上述错误，则盈透保留从账户中取消这一交易或要求客户接</span> <span class="s1">受该交易的权利，具体由盈透自行决定。</span> B. Customer agrees to notify IB immediately by telephone or electronically through the IB website if: i<span class="s1">)</span> Customer fails to receive an accurate confirmation of an execution or cancellation<span class="s1">;</span> ii<span class="s1">)</span> Customer receives a confirmation that is different than Customer's order<span class="s1">;</span> iii<span class="s1">)</span> Customer receives a confirmation for an order that Customer did not place<span class="s1">;</span> or iv<span class="s1">)</span> Customer receives an account statement<span class="s1">,</span> confirmation or other information reflecting inaccurate orders<span class="s1">,</span> trades<span class="s1">,</span> balances<span class="s1">,</span> positions<span class="s1">,</span> margin status or transaction history. Customer acknowledges that IB may adjust Customer's account to correct any error. Customer agrees to promptly return to IB any assets erroneously distributed to Customer. <br> <span class="s1">在以下情况下，客户同意立即通过电话或通过盈透的网站以电子方式通知盈透</span>: i<span class="s1">)客</span> <span class="s1">户未能收到定单被执行或被取消的准确确认;</span> ii<span class="s1">)</span> <span class="s1">客户收到与客户定单不一致的</span> <span class="s1">确认;</span> iii<span class="s1">)</span> <span class="s1">客户收到一份客户并未下达定单的确认;或</span>iv<span class="s1">)客户收到一个账户报告、确</span> <span class="s1">认或其它信息</span> <span class="s1">反映出不准确的定单、交易、余额、头寸、保证金状态或交易历史。</span> <span class="s1">客户确认盈透可能调整客户账户以更正任何错误。客户同意迅速将盈透由于失误分</span> <span class="s1">配给客户的任何资产返还给盈透。</span></p>
                                    <p class="p1">8. Proprietary Trading - Display of Customer Orders: Subject to all laws and regulations<span class="s1">,</span> Customer authorizes IB to execute proprietary trades of itself and its affiliates<span class="s1">,</span> though IB may simultaneously hold unexecuted Customer orders for the same products at the same price. <br> <span class="s1">自营交易</span>–<span class="s1">显示客户定单</span>: <span class="s1">根据所有法律与法规的规定，客户授权盈透执行其与其分支机构的自营交易，虽然盈透可能对同一产品以同一价格同时持有未执行的客户定单。</span></p>
                                    <p class="p1">9. Customer Qualification: Customer warrants that his<span class="s1">,</span> her or its application is true and complete<span class="s1">;</span> will promptly notify IB of any information changes<span class="s1">;</span> and authorizes IB to make any inquiry to verify information. <br> <span class="s1">客户资质：客户需保证其申请资料的真实及完整性;</span> <span class="s1">如任何信息发生变化，将迅速通知盈透;</span> <span class="s1">客户还授权盈透公司进行任何调查以证实上述信息。</span> <br> A. Natural Persons: Customer warrants that Customer is over 18<span class="s1">;</span> is under no legal incapacity<span class="s1">;</span> and has sufficient knowledge and experience to understand the nature and risks of the products to be traded. <br> <span class="s1">自然人：客户保证已年满</span>18<span class="s1">周岁;</span> <span class="s1">具有所有法定资格;</span> <span class="s1">具有足够的知识与经验理</span> <span class="s1">解</span> <span class="s1">将要交易的产品的性质与风险。</span> <br> B. Organizations: Customer and its authorized representatives warrant that Customer: <span class="s1">(</span>i<span class="s1">)</span> is authorized under its governing document<span class="s1">(</span>s<span class="s1">)</span> and in the jurisdictions in which it is organized and/or regulated to enter this Agreement and trade <span class="s1">(</span>including on margin if applicable<span class="s1">);</span> <span class="s1">(</span>ii<span class="s1">)</span> is under no legal incapacity<span class="s1">;</span> and <span class="s1">(</span>iii<span class="s1">)</span> that persons identified to enter orders have proper authority and have sufficient knowledge and experience to understand the nature and risks of the products to be traded. <br> <span class="s1">组织：客户与其授权代表保证，客户</span>:<span class="s1">(</span>i<span class="s1">)根据其组织文件和其所组建和／或受监</span> <span class="s1">管的</span> <span class="s1">管辖地内获得授权签署本合同与交易（如适用的话，包括保证金交易）;(</span>ii<span class="s1">)具有所有法律资格;</span> <span class="s1">且(</span>iii<span class="s1">)确认输入定单的人员具有适当的授权且具有足够的知识与经</span> <span class="s1">验理解其</span> <span class="s1">所将要交易的产品的性质与风险。</span> <br> C. Trusts: "Customer" refers to the Trust and/or Trustees. Trustee<span class="s1">(</span>s<span class="s1">)</span> represent<span class="s1">(</span>s<span class="s1">)</span> that there are no Trustees other than listed in the application and certifies<span class="s1">(</span>y<span class="s1">)</span> that IB may follow instructions from any Trustee and deliver funds<span class="s1">,</span> securities<span class="s1">,</span> or any other assets to any Trustee or on any Trustee's instructions<span class="s1">,</span> including delivering assets to a Trustee personally. IB<span class="s1">,</span> in its discretion<span class="s1">,</span> may require written consent of any or all Trustee<span class="s1">(</span>s<span class="s1">)</span> prior to following instructions of any Trustee. Trustee<span class="s1">(</span>s<span class="s1">)</span> certify that Trustee<span class="s1">(</span>s<span class="s1">)</span> has <span class="s1">(</span>have<span class="s1">)</span> the power under the Trust documents and applicable law to enter this Agreement<span class="s1">,</span> open the type of account applied for<span class="s1">,</span> and enter transactions and issue instructions. Such powers include<span class="s1">,</span> without limit<span class="s1">,</span> authority to buy<span class="s1">,</span> sell <span class="s1">(</span>including short<span class="s1">),</span> exchange<span class="s1">,</span> convert<span class="s1">,</span> tender<span class="s1">,</span> redeem and withdraw assets <span class="s1">(</span>including delivery of securities to/from the account<span class="s1">)</span> to trade securities on margin or otherwise <span class="s1">(</span>including purchase/sale of options<span class="s1">),</span> and trade futures and/or options on futures<span class="s1">,</span> for the Trust. Should only one Trustee execute this Agreement<span class="s1">,</span> Trustee represents that Trustee has the authority to execute this Agreement<span class="s1">,</span> without consent by the other Trustees. Trustee<span class="s1">(</span>s<span class="s1">)</span> certifies<span class="s1">(</span>y<span class="s1">)</span> that all transactions for this account will comply with the Trust documents and applicable law and that all trading in this Account will be consistent with the powers delegated to the Trustee<span class="s1">(</span>s<span class="s1">)</span> by the Trust document<span class="s1">(</span>s<span class="s1">)</span> and with the fiduciary duties of the Trustee<span class="s1">(</span>s<span class="s1">)</span> to the Trust and/or the beneficiary<span class="s1">(</span>ies<span class="s1">)</span> of the Trust. Trustee<span class="s1">(</span>s<span class="s1">)</span> also certifies<span class="s1">(</span>y<span class="s1">)</span> that Trustee<span class="s1">(</span>s<span class="s1">)</span> will inform any beneficiary<span class="s1">(</span>ies<span class="s1">)</span> of the Trust of the activity in the Trust's account<span class="s1">(</span>s<span class="s1">)</span> as required by the Trust document and applicable law. Trustee<span class="s1">(</span>s<span class="s1">),</span> jointly and severally<span class="s1">,</span> shall indemnify IB and hold IB harmless from any claim<span class="s1">,</span> loss<span class="s1">,</span> expense or liability for effecting any transactions<span class="s1">,</span> and acting upon any instructions given by the Trustee<span class="s1">(</span>s<span class="s1">)</span>. Trustee<span class="s1">(</span>s<span class="s1">)</span> will notify Interactive promptly if the authority of the Trustee<span class="s1">(</span>s<span class="s1">)</span> change in any manner material to this Agreement<span class="s1">,</span> including but not limited to any change affecting the accuracy of any warrants made herein. <span class="s1">信托：</span>" <span class="s1">客户</span>" <span class="s1">指的是信托人和／或受托人。受托人表示除了列明在申请资料上的受托</span> <span class="s1">人</span> <span class="s1">以外没有其他的受托人，并证实盈透可遵从任何受托人的指示，将资金、证券或任何它</span> <span class="s1">资</span> <span class="s1">产交付给任何受托人或根据任何受托人的指示将资金、证券或任何其它资产交付给任何受托人，包括将资产交付给受托人本人。盈透可自行决定要求在遵从任何</span> <span class="s1">受托人的指示前</span> <span class="s1">获</span> <span class="s1">得任何或所有受托人的书面同意。根据信托文件和现行法律，受托人有权签署本合同打</span> <span class="s1">开</span> <span class="s1">所申请的账户类型、进行交易及发布指令。上</span> <span class="s1">述权力包括但不限于由信托授权买入、卖出</span> <span class="s1">（包括卖空）、交易、转换、偿还、赎回与提取资产（包括向／从账户内交付证券）、</span> <span class="s1">授</span> <span class="s1">权以保证金交易证券或与此相反（包括购买／出售期权）、交易期货和／或交易期货期</span> <span class="s1">权。如只有一名受托人执行本合同，受托人表示无需获得其它受托人同意的情况下其有权</span> <span class="s1">执行本合同。受托人证明本账户的所有交易将遵守信托文件与适用法律。受托人应共同并</span> <span class="s1">各自保障盈透公司免于承担根据受托人指示采取的任何交易和行动所引起的任何索赔、损失、费用或责任。</span> <br> D. Regulated Persons and Entities: Unless Customer notifies IB otherwise<span class="s1">,</span> Customer represents that Customer is not a broker-dealer<span class="s1">;</span> futures commission merchant<span class="s1">;</span> or affiliate<span class="s1">,</span> associated person or employee thereof. Customer agrees to notify IB immediately by telephone or electronically through the IB website if Customer becomes employed or associated with a broker-dealer or futures commission merchant. <br> <span class="s1">受监管的个体或实体：</span> <span class="s1">除非客户通知盈透，否则客户表示他不是一名经纪商</span>-<span class="s1">交易商、期货佣金商、或其分支机构、关联人士或雇员。如果客户成为一个经纪商</span>-<span class="s1">交易商或期货佣</span> <span class="s1">金商的雇员或与之相关联，客户同意立即通过电话或通过盈透的网站以电子方式通知透。</span></p>
                                    <p class="p1">10. Joint Accounts: Each joint account holder agrees that each joint holder has authority<span class="s1">,</span> without notice to the other<span class="s1">,</span> to: <span class="s1">(</span>i<span class="s1">)</span> buy/sell securities<span class="s1">,</span> futures or other products <span class="s1">(</span>including on margin<span class="s1">);</span> <span class="s1">(</span>ii<span class="s1">)</span> receive account confirmations and correspondence<span class="s1">;</span> <span class="s1">(</span>iii<span class="s1">)</span> receive and dispose of money<span class="s1">,</span> securities or other assets<span class="s1">;</span> <span class="s1">(</span>iv<span class="s1">)</span> enter<span class="s1">,</span> terminate<span class="s1">,</span> or agree to modify this Agreement<span class="s1">;</span> <span class="s1">(</span>v<span class="s1">)</span> waive any part of this Agreement<span class="s1">;</span> and <span class="s1">(</span>vi<span class="s1">)</span> deal with IB as if each joint holder was the sole holder. Notice to any joint holder constitutes notice to all joint holders. Each joint account holder is jointly andseverally liable to IB for all account matters. IB may follow instructions of any joint holder and make delivery to any joint account holder individually of any account property. <br> <span class="s1">联名账户：</span> <span class="s1">每个联名账户的持有人同意每位联名持有人在不通知其它持有人的情</span> <span class="s1">况下有</span> <span class="s1">权：(</span>i<span class="s1">)买／卖证券、期货或其它产品（包括保证金交易）；(</span>ii<span class="s1">)接收账户确认与</span> <span class="s1">函件；(</span>iii<span class="s1">)</span> <span class="s1">接收与处理钱款、证券或其它资产；(</span>iv<span class="s1">)</span> <span class="s1">签署、终止或同意修改本合同；</span> <span class="s1">(</span>v<span class="s1">)放弃本合同</span> <span class="s1">的任何部分；和(</span>vi<span class="s1">)如每个联名持有人为单独的持有人与盈透进行交道。</span> <span class="s1">发给任何联名</span> <span class="s1">持有人的通知视为发给所有联名持有人的通知。每个联名账户持有人共同</span> <span class="s1">并各自向盈透</span> <span class="s1">负责所有账户事宜。盈透可遵从任何一位联名持有人的指示，并可将任何</span> <span class="s1">账户财产单独</span> <span class="s1">交付给任何账户持有人。</span> <br> Upon death of any joint holder<span class="s1">,</span> the surviving holder shall give IB notice by telephone or electronically through the IB website and IB may<span class="s1">,</span> before or after notice<span class="s1">,</span> initiate proceedings<span class="s1">,</span> require documents<span class="s1">,</span> retain assets and/or restrict transactions as it deems advisable to protect itself against any liability or loss. The estate of any deceased joint account holder shall be liable and each survivor will be liable<span class="s1">,</span> jointly and severally<span class="s1">,</span> to IB for any debt or loss in the account or upon liquidation of the account. Unless Customers indicate otherwise<span class="s1">,</span> IB may presume that account holders are joint tenants with rights of survivorship. Upon death of any joint holder<span class="s1">,</span> the account shall be vested in the surviving holders<span class="s1">,</span> without in any manner releasing the deceased joint holder's estate from liability. <br> <span class="s1">在任何联名持有人已故后，幸存的持有人应通过电话或通过盈透网站以电子方式通</span> <span class="s1">知盈透，盈透可在通知前或通知后，发起诉讼、要求提交文件、保留资金和／或采</span> <span class="s1">取其所认为适当的措施限制交易以保护其自身免于任何责任或损失。任何已故联名</span> <span class="s1">账户持有人的遗产与每位幸存的联名账户持有人将共同并各自向盈透公司负责赔偿账户内的或账户清算后的任何债务或损失。除非客户另有说明，否则盈透可认为账户持有人是共同财产占有人，对共有财产中死者权利部分享有权利。在任何联名账户持有人死亡后，账户应被授予给幸存的持有人，同时不得以任何方式使死亡的联</span> <span class="s1">名持有人的遗产免于承担责任。</span></p>
                                    <p class="p1">11. Margin: <br> <span class="s1">保证金：</span> <br> A. Risk of Margin Trading: Margin trading is highly risky and may result in a loss of funds greater than Customer has deposited in the account. Customer represents that he or she has read the "Disclosure of Risks of Margin Trading" provided separately by IB. <br> <span class="s1">保证金交易的风险：保证金交易具有高风险性，导致的损失可能超过客户账户内</span> <span class="s1">的已存资金。客户表示已阅读由盈透公司单独提供的</span>" <span class="s1">保证金交易风险披露书</span>" <span class="s1">。</span> <br> B. Requirement to Maintain Sufficient Margin Continuously: Margin transactions are subject to initial and maintenance margin requirements of exchanges<span class="s1">,</span> clearinghouses and regulators and also to any additional margin requirement of IB<span class="s1">,</span> which may be greater <span class="s1">(</span>"Margin Requirements"<span class="s1">)</span>. IB MAY MODIFY MARGIN REQUIREMENTS FOR ANY OR ALL CUSTOMERS FOR ANY OPEN OR NEW POSITIONS AT ANY TIME<span class="s1">,</span> IN IB'S SOLE DISCRETION. Customer shall monitor his<span class="s1">,</span> her or its account so that at all times the account contains sufficient equity to meet Margin Requirements. IB may reject any order if the account has insufficient equity to meet Margin Requirements<span class="s1">,</span> and may delay processing any order while determining margin status. Customer shall maintain<span class="s1">,</span> without notice or demand<span class="s1">,</span> sufficient equity at all times to continuously meet Margin Requirements. Formulas for calculating Margin Requirements on the IB website are indicative only and may not reflect actual Margin Requirements. Customer must at all times satisfy whatever Margin Requirement is calculated by IB. <br> <span class="s1">要求连续维持足够保证金：</span> <span class="s1">保证金交易应遵守交易所、清算机构、监管机构的初始保证</span> <span class="s1">金与维持保证金的要求，同样还应遵守盈透的任何附加保证金规定，盈透的保证金的金额</span> <span class="s1">可能会更高(</span> "<span class="s1">保证金要求</span>" <span class="s1">)。盈透可自行决定在任何时间对任何开仓或新头寸修改任何</span> <span class="s1">或</span> <span class="s1">所有客户的保证金要求。客户应监控其账户以保证在任何时候账户均持有的足够的股权</span> <span class="s1">满</span> <span class="s1">足保证金要求。</span> <span class="s1">如账户内的股权不足以达到保证金要求，则盈透可拒绝任何定单，且可</span> <span class="s1">在</span> <span class="s1">确定保证金状态时延迟处理任何定单。无需任何通知或要求，客户应在任何时候保持足</span> <span class="s1">够</span> <span class="s1">的股权以持续满足保证金要求。盈透网站上用的保证金计算公式仅作参考，可能不能反</span> <span class="s1">映</span> <span class="s1">出实际的保证金要求。客户必须在任何时候满足由盈透计算的保证金要求。</span> <br> C. IB Will Not Issue Margin Calls: IB does not have to notify Customer of any failure to meet Margin Requirements prior to IB exercising its rights under this Agreement. Customer acknowledges that IB generally will not issue margin calls<span class="s1">;</span> generally will not credit Customer's account to meet intraday or overnight margin deficiencies<span class="s1">;</span> and is authorized to liquidate account positions in order to satisfy Margin Requirements without prior notice. <br> <span class="s1">盈透将不发出追加保证金通知：盈透在根据本合同行使其权利前不一定非得通知客户其</span> <span class="s1">未能达到保证金要求。客户确认盈透一般不会发出追加保证金的通知；一般来说将不会信</span> <span class="s1">客户账户补足日内或隔夜保证金短缺；且在不事先通知的情况下有权利平仓账户头寸以满</span> <span class="s1">足保证金要求。</span> <br> D. Liquidation of Positions and Offsetting Transactions: <br> <span class="s1">清算头寸与抵消交易：</span> <br> i. IF AT ANY TIME CUSTOMER'S ACCOUNT HAS INSUFFICIENT EQUITY TO MEET MARGIN REQUIREMENTS OR IS IN DEFICIT<span class="s1">,</span> IB HAS THE RIGHT<span class="s1">,</span> IN ITS SOLE DISCRETION<span class="s1">,</span> BUT NOT THE OBLIGATION<span class="s1">,</span> TO LIQUIDATE ALL OR ANY PART OF CUSTOMER'S POSITIONS IN ANY OF CUSTOMER'S IB NON-IRA ACCOUNTS<span class="s1">,</span> INDIVIDUAL OR JOINT<span class="s1">,</span> AT ANY TIME AND IN ANY MANNER AND THROUGH ANY MARKET OR DEALER<span class="s1">,</span> WITHOUT PRIOR NOTICE OR MARGIN CALL TO CUSTOMER. CUSTOMER SHALL BE LIABLE AND WILL PROMPTLY PAY IB FOR ANY DEFICIENCIES IN CUSTOMER'S ACCOUNT THAT ARISE FROM SUCH LIQUIDATION OR REMAIN AFTER SUCH LIQUIDATION. IB HAS NO LIABILITY FOR ANY LOSS SUSTAINED BY CUSTOMER IN CONNECTION WITH SUCH LIQUIDATIONS <span class="s1">(</span>OR IF THE IB SYSTEM DELAYS EFFECTING<span class="s1">,</span> OR DOES NOT EFFECT<span class="s1">,</span> SUCH LIQUIDATIONS<span class="s1">)</span> EVEN IF CUSTOMER RE-ESTABLISHES ITS POSITION AT A WORSE PRICE. <br> <span class="s1">如在任何时候，客户账户中的股权不足以满足保证金要求或为亏缺，则盈透有权</span> <span class="s1">自行决定但并非有此义务，在任何时候以任何方式、通过任何市场或交易商，在无</span> <span class="s1">事先通知或向客户发出追加保证金通知的情况下，清算在任何客户的盈透账户内所</span> <span class="s1">有或任何部分客户头寸（无论是个人的账户或联名账户）。客户应负责且将迅速向</span> <span class="s1">盈透支付由于上述平仓或上述平仓后保留的头寸所引起的客户账户账面所短少的金</span> <span class="s1">额。盈透对与上述平仓有关的客户所遭受的任何损失均不负有责任（或如盈透系统</span> <span class="s1">延迟执行或未能执行上述平仓）即便客户在一个更差的价格重建其仓位。</span> <br> ii. IB may allow Customer to pre-request the order of liquidation in event of a margin deficiency<span class="s1">,</span> but such requests are not binding on IB and IB retains sole discretion to determine the assets to be liquidated and the order/manner of liquidation. IB may liquidate through any market or dealer<span class="s1">,</span> and IB or its affiliates may take the other side of the transactions consistent with laws and regulations. If IB liquidates any/all positions in Customer's account<span class="s1">,</span> such liquidation shall establish Customer's gain/loss and remaining indebtedness to IB<span class="s1">,</span> if any. Customer shall reimburse and hold IB harmless for all actions<span class="s1">,</span> omissions<span class="s1">,</span> costs<span class="s1">,</span> fees <span class="s1">(</span>including<span class="s1">,</span> but not limited to<span class="s1">,</span> attorney's fees<span class="s1">),</span> or liabilities associated with any such transaction undertaken by IB. If IB executes an order for which Customer did not have sufficient equity<span class="s1">,</span> IB has the right<span class="s1">,</span> without notice<span class="s1">,</span> to liquidate the trade and Customer shall be responsible for any resulting loss and shall not be entitled to any resulting profit. <br> <span class="s1">如出现保证金不足的情况，盈透公司可允许客户预先要求清算顺序，但上述要求</span> <span class="s1">对盈透</span> <span class="s1">公司不具有约束力，盈透公司有权独自确定要清算的资产、清算顺序及清算</span> <span class="s1">方式。盈透可</span> <span class="s1">通过任何市场或交易商进行清算，盈透或其分支机构可能按符合法律</span> <span class="s1">法规的情况下做为交</span> <span class="s1">易的另一方。如盈透清算客户账户中的任何／所有仓位，上述</span> <span class="s1">清算仓位应确定客户的收益</span> <span class="s1">／损失与所欠盈透的债务，如有的话。客户应对由盈透</span> <span class="s1">所承担的任何上述交易相关的所有</span> <span class="s1">诉讼、疏忽、成本与费用（包括但不限于律师费）或责</span> <span class="s1">任做出补偿或使之不受损害。如盈</span> <span class="s1">透公司在客户账户内无足够的股权时执</span> <span class="s1">行一个定单，盈</span> <span class="s1">透有权在不事先通知客户的情况下</span> <span class="s1">清算交易，且客户应对任何由此引起的损失负责，且没</span> <span class="s1">有权利获得任何由此所得的利润。</span> <br> iii. If IB does not<span class="s1">,</span> for any reason<span class="s1">,</span> liquidate under-margined positions<span class="s1">,</span> and issues a margin call<span class="s1">,</span> Customer must satisfy such call immediately by depositing funds. Customer acknowledges that even if a call is issued<span class="s1">,</span> IB still may liquidate positions at any time. <br> <span class="s1">无论出于何种原因，如果盈透未能清算保证金不足的头寸且发出追加保证金通知，客</span> <span class="s1">户</span> <span class="s1">必须立即存入资金满足上述保证金追缴通知。客户确认如发出追缴通知后，盈透仍可在</span> <span class="s1">任</span> <span class="s1">何时候平仓头寸。</span> <br> iv. Customer acknowledges that IB also has the right to liquidate all or part of Customer's positions without prior notice: <span class="s1">(</span>i<span class="s1">)</span> if any dispute arises concerning any Customer trade<span class="s1">,</span> <span class="s1">(</span>ii<span class="s1">)</span> upon any "Default" as described in 16 below<span class="s1">,</span> or <span class="s1">(</span>iii<span class="s1">)</span> whenever IB deems liquidation necessary or advisable for IB's protection. <br> <span class="s1">客户确认盈透同样还有权在没有事先通知时清算所有或部分客户的仓位：(</span>i<span class="s1">)如</span> <span class="s1">在</span> <span class="s1">客户的任何交易出现任何争议时，(</span>ii<span class="s1">)出现在以下第</span>16<span class="s1">条中所述的任何</span>" <span class="s1">违约</span>" <span class="s1">后，或</span> <span class="s1">(</span>iii<span class="s1">)任何时候当盈透认为为了保护盈透的利益有必要或适当地进行清算时。</span></p>
                                    <p class="p1">12. Universal Accounts: An IB Universal Account is two underlying accounts: an SEC-regulated securities account and a CFTC-regulated commodity account. Customer authorizes transfers between the securities and commodity accounts to cover Margin Requirements and other obligations<span class="s1">,</span> and acknowledges IB may liquidate positions to cover obligations in the other account. Customer authorizes IB to provide combined confirmations/statements for both accounts. Customer acknowledges that only assets in the securities account are covered by SIPC protection and excess coverage and not assets in the commodity account. <br> <span class="s1">全能账户：一个盈透全能账户为两个基础账户,其中一个是美国证券交易委员会</span> <span class="s1">(</span>SEC<span class="s1">)监</span> <span class="s1">管的证券账户，另一个是美国商品期货交易委员会(</span>CFTC<span class="s1">)监管的商品账户。客户</span> <span class="s1">授权在</span> <span class="s1">证券与商品账户之间进行转账以满足保证金要求与其它债务要求并确认盈透可平</span> <span class="s1">仓以支</span> <span class="s1">付其它账户内的债务。客户授权盈透为上述账户提供合并确认书／报表。客户确</span> <span class="s1">认仅证</span> <span class="s1">券账户内的资产受到美国证券投资者保护基金(</span>SIPC<span class="s1">)的保护或者额外保护，但不</span> <span class="s1">包括商</span> <span class="s1">品账户内的资产。</span></p>
                                    <p class="p1">13. Short Sales: Customer acknowledges that short sales must be done in a margin account<span class="s1">,</span> subject to Margin Requirements<span class="s1">;</span> that prior to selling short<span class="s1">,</span> IB must believe it can borrow stock for delivery<span class="s1">;</span> and that if IB cannot borrow stock <span class="s1">(</span>or re-borrow after a recall notice<span class="s1">)</span> IB may buy-in stock on Customer's behalf<span class="s1">,</span> without notice to Customer<span class="s1">,</span> to cover short positions and Customer is liable for any losses/costs. <br> <span class="s1">卖空：</span> <span class="s1">客户确认卖空必须在保证金账户内进行，并符合保证金的要求;</span> <span class="s1">在卖空</span> <span class="s1">前，盈透</span> <span class="s1">必须确信其能借入股票进行交付；且如盈透不能借入股票（或在召回通知发出</span> <span class="s1">后再次</span> <span class="s1">借用），盈透可在不通知客户的情况下以客户名义买入股票以补仓，客户对此所</span> <span class="s1">引发</span> <span class="s1">的任何损失／费用负责。</span></p>
                                    <p class="p1">14. IB's Right to Loan/Pledge Customer Assets: As allowed by law<span class="s1">,</span> IB is authorized by Customer to lend to itself or others Customer securities or assets. IB may<span class="s1">,</span> without notice<span class="s1">,</span> pledge<span class="s1">,</span> re-pledge<span class="s1">,</span> hypothecate or re-hypothecate Customer's securities and assets<span class="s1">,</span> separately or together with those of other customers<span class="s1">,</span> for any amount due in any IB account in which Customer has an interest<span class="s1">,</span> without retaining in IB's possession or control a like amount of assets. For loans of securities<span class="s1">,</span> IB may receive financial and other benefits to which Customer is not entitled. Such loans could limit Customer's ability to exercise securities' voting rights. <br> <span class="s1">盈透借贷</span>/<span class="s1">质押客户资产的权利：</span> <span class="s1">根据法律规定允许的范围，客户授权盈透可以</span> <span class="s1">向其或</span> <span class="s1">其它客户借出证券或资产。无需通知客户，</span>IB<span class="s1">可对客户在盈透账户中有股权的任</span> <span class="s1">何到期</span> <span class="s1">金额单独或与其它客户一起质押、再质押、抵押或再抵押客户的证券与资金，而</span> <span class="s1">盈透不</span> <span class="s1">必保持对一项相同资产的拥有或控制权。对于证券的借贷，盈透可接受客户无权</span> <span class="s1">享有的</span> <span class="s1">经济利益与其它利益。该等借贷可能会限制客户行使证券表决权的能力。</span></p>
                                    <p class="p1">15. Security Interest: All assets of any kind held by or on behalf of IB for Customer's account are hereby pledged to IB and are subject to a perfected first priority lien and security interest in IB's favor to secure performance of obligations and liabilities to IB arising under this or any other Agreement. <br> <span class="s1">担保权益：</span> <span class="s1">由盈透所持有的或代表盈透的客户账户的所有客户资产在此质押给盈</span> <span class="s1">透，</span> <span class="s1">且盈透对留置与担保权益应享有完全优先受偿的权利，以确保本合同或任何其它合</span> <span class="s1">同项</span> <span class="s1">下的所欠下的盈透的债务与欠债得以清偿。</span></p>
                                    <p class="p1">16. Event of Default: A "Default" occurs automatically<span class="s1">,</span> without notice upon: <span class="s1">(</span>i<span class="s1">)</span> Customer breach/repudiation of any agreement with IB<span class="s1">;</span> <span class="s1">(</span>ii<span class="s1">)</span> Customer failure to provide assurance satisfactory to IB of performance of an obligation<span class="s1">,</span> after request from IB in IB's sole discretion<span class="s1">;</span> <span class="s1">(</span>iii<span class="s1">)</span> proceedings by/against Customer under any bankruptcy<span class="s1">,</span> insolvency<span class="s1">,</span> or similar law<span class="s1">;</span> <span class="s1">(</span>iv<span class="s1">)</span> assignment for the benefit of Customer's creditors<span class="s1">;</span> <span class="s1">(</span>v<span class="s1">)</span> appointment of a receiver<span class="s1">,</span> trustee<span class="s1">,</span> liquidator or similar officer for Customer or Customer property<span class="s1">;</span> <span class="s1">(</span>vi<span class="s1">)</span> Customer representations being untrue or misleading when made or later becoming untrue<span class="s1">;</span> <span class="s1">(</span>vii<span class="s1">)</span> legal incompetence of Customer<span class="s1">;</span> <span class="s1">(</span>viii<span class="s1">)</span> proceeding to suspend Customer's business or license by any regulator or organization<span class="s1">;</span> <span class="s1">(</span>ix<span class="s1">)</span> IB having reason to believe that any of the foregoing is likely to occur imminently. <br> <span class="s1">违约事件：</span> <span class="s1">在不通知的情况下，</span>" <span class="s1">违约</span>" <span class="s1">在以下情况下自动发生：(</span>i<span class="s1">)客户违反／拒绝履行与盈透之间的任何合同；(</span>ii<span class="s1">)在盈透自行决定发出要求后，客户未向盈透提</span> <span class="s1">供</span> <span class="s1">让盈透满意的清偿债务保证；(</span>iii<span class="s1">)</span> <span class="s1">根据任何破产法或相似的法律，由客户发起或</span> <span class="s1">针</span> <span class="s1">对客户发起诉讼；(</span>iv<span class="s1">)为了客户债权人的利益进行转让；(</span>v<span class="s1">)指定客户或客户财产的接</span> <span class="s1">收</span> <span class="s1">人、受托人、财产清算人或类似人员；(</span>vi<span class="s1">)客户的陈述在当时进行时不真实或具有误</span> <span class="s1">导</span> <span class="s1">性，或后来不具有真实性；(</span>vii<span class="s1">)客户无法律行为能力；(</span>viii<span class="s1">)由任何监管机构或组织</span> <span class="s1">终止</span> <span class="s1">客户业务或许可；(</span>ix<span class="s1">)盈透有理由相信任何以上情况可能即将发生。</span> <br> Customer unconditionally agrees that<span class="s1">,</span> upon a Default<span class="s1">,</span> IB may terminate any or all IB's obligations to Customer and IB shall have the right in its discretion<span class="s1">,</span> but not the obligation<span class="s1">,</span> without prior notice<span class="s1">,</span> to liquidate all or any part of Customer's positions in any IB account<span class="s1">,</span> individual or joint<span class="s1">,</span> at any time and any manner and through any market or dealer. Customer shall reimburse and hold IB harmless for all actions<span class="s1">,</span> omissions<span class="s1">,</span> costs<span class="s1">,</span> fees <span class="s1">(</span>including<span class="s1">,</span> but not limited to<span class="s1">,</span> attorney's fees<span class="s1">),</span> or liabilities associated with any Customer Default or any transaction undertaken by IB upon Default. <br> <span class="s1">客户无条件同意一旦违约，盈透可终止履行其对客户的部分或所有义务，且盈透有权自行</span> <span class="s1">决定但并非有此义务在无事先告知的情况下，在任何时间以任何方式通过任何市场或交易</span> <span class="s1">商清算任何盈透个人账户或联名账户内所有或部分客户的仓位。客户应对任何客户违约相</span> <span class="s1">关的、或者因客户违约由盈透完成的交易相关的所有诉讼、疏忽、成本与费用（包括但不</span> <span class="s1">限于律师费）或债务做出补偿或使之不受损害。</span></p>
                                    <p class="p1">17. Suspicious Activity: If IB in its sole discretion believes that a Customer account has been involved in any fraud or crime or violation of laws or regulations<span class="s1">,</span> or has been accessed unlawfully<span class="s1">,</span> or is otherwise involved in any suspicious activity <span class="s1">(</span>whether victim or perpetrator or otherwise<span class="s1">),</span> IB may suspend or freeze the account or any privileges of the account<span class="s1">,</span> may freeze or liquidate funds or assets<span class="s1">,</span> or may utilize any of the remedies in this Agreement for a "Default". <br> <span class="s1">可疑行为：如盈透根据其自已的判断认为客户的账户参与了任何诈欺或犯罪行</span> <span class="s1">为，或</span> <span class="s1">违反法律法规，或已被非法侵入或卷入任何可疑行为（无论是作为受害者或犯罪</span> <span class="s1">者或</span> <span class="s1">其它身份），盈透可终止或冻结账户、或账户的任何特权；可冻结或清算资金或资</span> <span class="s1">产；或可利用本合同的</span>" <span class="s1">违约事件</span>" <span class="s1">的任何法律补偿。</span></p>
                                    <p class="p1">18. Multi-Currency Function in IB Accounts: <br> <span class="s1">盈透账户内的多币种功能：</span> <br> A. Customers may be able to trade products denominated in different currencies using a base currency chosen by Customer. Upon purchase of a product denominated in a different currency from the base currency<span class="s1">,</span> a margin loan is created to fund the purchase<span class="s1">,</span> secured by the assets in Customer's accounts. If Customer maintains positions denominated in foreign currencies<span class="s1">,</span> IB will calculate Margin Requirements by applying exchange rates specified by IB. IB WILL APPLY "HAIRCUTS" <span class="s1">(</span>A PERCENTAGE DISCOUNT ON THE FOREIGN CURRENCY EQUITY AMOUNT<span class="s1">)</span> TO REFLECT THE POSSIBILITY OF FLUCTUATING EXCHANGE RATES BETWEEN THE BASE CURRENCY AND THE FOREIGN CURRENCY. CUSTOMER MUST CLOSELY MONITOR MARGIN REQUIREMENTS AT ALL TIMES<span class="s1">,</span> PARTICULARLY FOR POSITIONS DENOMINATED IN FOREIGN CURRENCIES<span class="s1">,</span> BECAUSE FLUCTUATION IN THE CURRENCY ANDTHE VALUE OF THE UNDERLYING POSITION CAN CAUSE A MARGIN DEFICIT. <br> <span class="s1">客户可使用一个由客户选定的基础货币对以不同货币计价的产品进行交易。</span> <span class="s1">在</span> <span class="s1">购买与基础货币不同的计价货币产品时，创建了为购买产品提供资金的保证金，并</span> <span class="s1">由客户账户内的资金提供担保。如客户保持以外币计价的头寸，盈透将利用由其指</span> <span class="s1">定的汇率，计算保证金要求。盈透将利用</span>" <span class="s1">折扣</span>" <span class="s1">基于外币的股权额的一个百分比折扣率)以反映基础货币与该外币之间的波动汇率的可能性。客户必须随时密切监视保证金</span> <span class="s1">要求，特别是以外币计价的头寸的保证金要求。因为该货币与底层证券头寸价值的波动可</span> <span class="s1">能引起保证金不足。</span> <br> B. Customer agrees that IB<span class="s1">’</span>s obligations to Customer shall be denominated in: <span class="s1">(</span>i<span class="s1">)</span> the United States dollar<span class="s1">;</span> <span class="s1">(</span>ii<span class="s1">)</span> a currency in which funds were deposited by Customer or were converted at the request of Customer<span class="s1">,</span> to the extent of such deposits and conversions<span class="s1">;</span> or <span class="s1">(</span>iii<span class="s1">)</span> a currency in which funds have accrued to the customer as a result of trading conducted on a designated contract market or registered derivatives transaction execution facility<span class="s1">,</span> to the extent of such accruals. Information regarding Customer<span class="s1">’</span>s currency conversions is provided on the IB customer statements. Customer further agrees that IB may hold customer funds in: <span class="s1">(</span>i<span class="s1">)</span> the United States<span class="s1">;</span> <span class="s1">(</span>ii<span class="s1">)</span> a money center country as defined by the US Commodity Exchange Act &amp; regulations thereunder<span class="s1">;</span> or <span class="s1">(</span>iii<span class="s1">)</span> the country of origin of the currency. In addition<span class="s1">,</span> Customer acknowledges and authorizes IB to hold Customer<span class="s1">’</span>s funds outside the United States<span class="s1">,</span> in a jurisdiction that is neither a money center country nor the country of origin of the currency in order to facilitate Customer<span class="s1">’</span>s trading in investments denominated in that currency. <br> <span class="s1">客户同意盈透对其应尽义务范围按以下所列货币项目为基准进行界定：(</span>i<span class="s1">)美</span> <span class="s1">元；(</span>ii<span class="s1">)</span> <span class="s1">客户</span> <span class="s1">存入基金的货币或要求转换的货币，包括客户所存放的资金和所转换</span> <span class="s1">成的货币的额</span> <span class="s1">度；或</span> <span class="s1">(</span>iii<span class="s1">)客户通过在特定的合约市场进行交易所产生的基金货币，或是客户通过合法衍</span> <span class="s1">生性商品</span> <span class="s1">交易市场投资获利产生的货币。客户货币转换的相关资讯详载于盈透客户声中。</span> <span class="s1">此外，客</span> <span class="s1">户同意在下列地点条件下，盈透可以持管其资金：(</span>i<span class="s1">)美国；(</span>ii<span class="s1">)</span> <span class="s1">美国商品交易</span> <span class="s1">法及其相关规</span> <span class="s1">定所认可的货币中心国家境内；或</span> <span class="s1">(</span>iii<span class="s1">)</span> <span class="s1">该币种的原属国家境内。此外，客</span> <span class="s1">户认可同意并授</span> <span class="s1">权盈透可以在美国境外持管其资金，以方便盈透能在美国境外用当地的货</span> <span class="s1">币来协助客户进</span> <span class="s1">行交易投资，上述所称的美国境外，是指货币交易中心或货币原属国以外</span> <span class="s1">的地区，其司法管辖权不属美国。</span></p>
                                    <p class="p1">19. Foreign Currency Exchange <span class="s1">(</span>"Forex"<span class="s1">)</span> Transactions: <br> <span class="s1">外币兑换（简称</span>" <span class="s1">外汇交易</span>" <span class="s1">）：</span> <br> A. HIGH RISKS OF FOREX TRADING: FOREX TRADING IS GENERALLY UNREGULATED<span class="s1">,</span> IS HIGHLY RISKY DUE TO THE LEVERAGE <span class="s1">(</span>MARGIN<span class="s1">)</span> INVOLVED<span class="s1">,</span> AND MAY RESULT IN LOSS OF FUNDS GREATER THAN CUSTOMER DEPOSITED IN THE ACCOUNT. Customer represents that he or she has read and acknowledges the "Risk Disclosure Statement for Forex Trading and Multi-Currency Accounts" provided separately by IB. <br> <span class="s1">外汇交易的高风险性：</span> <span class="s1">外汇交易一般不受监管，由于牵涉到杠杆（保证金），</span> <span class="s1">具有高风险性，且所引起的资金损失可能超过账户内客户所存的资金。客户确认盈</span> <span class="s1">透公司单独提供的</span>" <span class="s1">外汇交易与多币种账户风险披露声明</span>"<span class="s1">。</span> <br> B. For Forex transactions<span class="s1">,</span> IB generally will act as agent or riskless principal and charge a fee. IB may effect Forex transactions through an affiliate or third party<span class="s1">,</span> which may profit or lose from such transactions. Customer agrees that IB may transfer to or from Customer's regulated futures or securities account<span class="s1">(</span>s<span class="s1">)</span> from or to any of Customer's non-regulated Forex account any funds or assets that may be required to avoid margin calls<span class="s1">,</span> reduce debit balances or for any other lawful reason. <br> <span class="s1">对于外汇交易，盈透通常作为一个代理人或无风险主体，收取手续费。盈透可</span> <span class="s1">通过其</span> <span class="s1">分支机构或第三方进行外汇兑换交易，上述分支机构或第三方可从上述交易中获得收益或</span> <span class="s1">承担损失。客户同意盈透可将任何资金或资产转出或转入客户的受监管的期货或证券账</span> <span class="s1">户、转入或转出客户的任何非监管外汇账户，以便避免保证金追缴通知、减少借方余额</span> <span class="s1">或为了任何其它合法理由。</span> <br> C. Netting: <span class="s1">(</span>i<span class="s1">)</span> Netting by Novation. Each Forex transaction between Customer and IB will immediately be netted with all then-existing Forex transactions between Customer and IB for the same currencies to constitute one transaction. <span class="s1">(</span>ii<span class="s1">)</span> Payment Netting. If on any delivery date more than one delivery of a currency is due<span class="s1">,</span> each party shall aggregate the amounts deliverable and only the difference shall be delivered. <span class="s1">(</span>iii<span class="s1">)</span> Close-Out Netting. If Customer: <span class="s1">(</span>a<span class="s1">)</span> incurs a margin deficit in any IB account<span class="s1">,</span> <span class="s1">(</span>b<span class="s1">)</span> defaults on any obligation to IB<span class="s1">,</span> <span class="s1">(</span>c<span class="s1">)</span> becomes subject to bankruptcy<span class="s1">,</span> insolvency or other similar proceedings<span class="s1">,</span> or <span class="s1">(</span>d<span class="s1">)</span> fails to pay debts when due<span class="s1">,</span> IB has the right but not the obligation to close out Customer's Forex transactions<span class="s1">,</span> liquidate all or some of Customer's collateral and apply the proceeds to any debt to IB. <span class="s1">(</span>iv<span class="s1">)</span> Upon Close-Out Netting or any "Default"<span class="s1">,</span> all outstanding Forex transactions will be deemed terminated as of the time immediately preceding the triggering event<span class="s1">,</span> petition or proceeding. <span class="s1">(</span>v<span class="s1">)</span> IB's rights herein are in addition to any other rights IB has <span class="s1">(</span>whether by agreement<span class="s1">,</span> by law or otherwise<span class="s1">)</span>. <br> <span class="s1">净额结算：</span> <span class="s1">(</span>i<span class="s1">)通知债务更新进行净额结算。客户与盈透之间的每笔外汇兑换交</span> <span class="s1">易将立</span> <span class="s1">即以相同的币种进行客户与盈透之间的所有现有外汇兑换交易进行净额结算</span> <span class="s1">以构成一次</span> <span class="s1">交易。(</span>ii<span class="s1">)支付净额结算。如在任何一个交割日期，有一种货币的多个</span> <span class="s1">到期进行交割，则</span> <span class="s1">每一方应计算应交割的总金额，只进行差额的交割。(</span>iii<span class="s1">)终止型</span> <span class="s1">净额结算。如客户：(</span>a<span class="s1">)在</span> <span class="s1">任何盈透的账户内出现保证金短缺；(</span>b<span class="s1">)在任何对盈透的</span> <span class="s1">义务方面违约，(</span>c<span class="s1">)进入破产或其</span> <span class="s1">它相似程序，或(</span>d<span class="s1">)未能支付到期债务，则盈透有</span> <span class="s1">权但无此义务终止客户外汇兑换交易、</span> <span class="s1">清算所有或部分客户的担保品并将所得用于</span> <span class="s1">支付所欠盈透的任何债务。(</span>iv<span class="s1">)在终止型净额</span> <span class="s1">清算或任何</span>" <span class="s1">违约</span>" <span class="s1">后，所有未执行的</span> <span class="s1">外汇兑换交易将视为在触发事件、请愿或诉讼前即</span> <span class="s1">已终止。(</span>v<span class="s1">)盈透的权利附加在</span> <span class="s1">盈透拥</span> <span class="s1">有的任何其它权利上（无论是合同、法律等所赋予</span> <span class="s1">的权利）。</span> <br> D. Nothing herein constitutes a commitment of IB to offer Forex transactions generally or to enter into any specific Forex transaction. IB reserves the unlimited right to refuse any Forex order or to decline to quote a two-way market in any currency. <br> <span class="s1">本合同中任何内容不得视为盈透承诺提供一般的外汇兑换交易或签署任何特定的</span> <span class="s1">外汇兑换交易。盈透保留不受限制拒绝任何外汇兑换交易定单或拒绝以任何货币进</span> <span class="s1">行双向市场报价的权力。</span></p>
                                    <p class="p1"><br> 20. Commodity Options and Futures Not Settled in Cash: Customer acknowledges that: <span class="s1">(</span>A<span class="s1">)</span> commodity options cannot be exercised and must be closed out by offset<span class="s1">;</span> and <span class="s1">(</span>B<span class="s1">)</span> for futures contracts that settle not in cash but byphysical delivery of the commodity <span class="s1">(</span>including currencies not on IB's Deliverable Currency List<span class="s1">),</span> Customer cannot make or receive delivery. If Customer has not offset a commodity option or physical delivery futures position prior to the deadline on the IB website<span class="s1">,</span> IB is authorized to roll or liquidate the position or liquidate any position or commodity resulting from the option or futures contract<span class="s1">,</span> and Customer is liable for all losses/costs. <br> <span class="s1">不以现金结算的商品期权与期货：</span> <span class="s1">客户确认：(</span>A<span class="s1">)商品期权不能行使，必须通过</span> <span class="s1">对冲来</span> <span class="s1">平仓；且(</span>B<span class="s1">)</span> <span class="s1">对于不以现金结算而通过商品实物交割的期货合约（包括不在盈透</span> <span class="s1">可交割</span> <span class="s1">货币清单上的货币），客户不能进行或接受交割。如客户在盈透网站上公布的最</span> <span class="s1">后截</span> <span class="s1">止日期前尚未抵销商品期权或实物交割期货仓位，客户授权盈透转仓或平仓或清算</span> <span class="s1">由</span> <span class="s1">期权或期货合约所引起的任何仓位或商品，客户负责承担所有损失</span>/<span class="s1">费用。</span></p>
                                    <p class="p1">21. Commissions and Fees<span class="s1">,</span> Interest Charges<span class="s1">,</span> Funds: Commissions and fees are as specified on the IB website unless otherwise agreed in writing by an officer of IB. Customer acknowledges that IB deducts commissions/fees from Customer accounts<span class="s1">,</span> which will reduce account equity. Positions will be liquidated if commissions or other charges cause a margin deficiency. Changes to commissions/fees are effective immediately upon either of: posting on the IB website or email or other written notice to Customer. IB shall pay credit interest to and charge debit interest from Customer at interest rates and terms on the IB website. Customer funds will not be disbursed until after transactions are settled. Terms and conditions for deposit and withdrawal of funds <span class="s1">(</span>including holding periods<span class="s1">)</span> are as specified on the IB website. <br> <span class="s1">佣金与手续费、利息费用、资金：除非盈透管理人员书面同意，否则佣金与手续</span> <span class="s1">费按</span> <span class="s1">照盈透网站上确定的收取。客户确认盈透从客户账户扣除佣金／手续费，由此将降低账户的股权。如佣金或其它收费引起保证金出现短缺，将平仓头寸。在以下任何一种</span> <span class="s1">情况发生后佣金或手续费变化即生效：登在盈透网站上或以电子邮件或其它书面通知发</span> <span class="s1">送给客户。盈透应以其网站上载明的利率与条款向客户支付利息收入，向客户收取借项</span> <span class="s1">利息。客户资金只有在交易结算后方可拨付。资金存入与支取条款（包括持有时间）在</span> <span class="s1">盈透网站上具体规定。</span></p>
                                    <p class="p1">22. Account Deficits: If a cash account incurs a deficit<span class="s1">,</span> margin interest rates will apply until the balance is repaid<span class="s1">,</span> and IB has the right<span class="s1">,</span> but not the obligation<span class="s1">,</span> to treat the account as a margin account. Customer agrees to pay reasonable costs of collection for any unpaid Customer deficit<span class="s1">,</span> including attorneys' and collection agent fees. <br> <span class="s1">账户负结余：如一个现金账户出现负值，将对差额实行保证金利率直到偿还为</span> <span class="s1">止，盈</span> <span class="s1">透有权但无义务将此账户作为保证金账户对待。客户同意对任何未支付的客户帐</span> <span class="s1">户不</span> <span class="s1">足资金支付合理的收款成本，包括律师费与收款代理人手续费。</span></p>
                                    <p class="p1">23. Risks of Foreign Markets<span class="s1">;</span> After Hours Trading: Customer acknowledges that trading securities<span class="s1">,</span> options<span class="s1">,</span> futures<span class="s1">,</span> currencies or any product on a foreign market is speculative and involves high risk. There also are special risks of trading outside ordinary market hours<span class="s1">,</span> including risk of lower liquidity<span class="s1">,</span> higher volatility<span class="s1">,</span> changing prices<span class="s1">,</span> un-linked markets<span class="s1">,</span> news announcements affecting prices and wider spreads. Customer represents that Customer is knowledgeable and able to assume these risks. <br> <span class="s1">外国市场的风险；收盘后交易时段的风险：</span> <span class="s1">客户确认在外国市场上进行证券、期</span> <span class="s1">权、期</span> <span class="s1">货、货币或任何产品的交易具有投机性，存在很高的风险。还存在正常交易时间</span> <span class="s1">以外的</span> <span class="s1">特殊交易风险，包括低流动性风险、高波动率的风险，价格变化风险、未能连接</span> <span class="s1">的市</span> <span class="s1">场，影响价格的新闻公告与更大差价。客户表示其充分了解上述风险，且有能力承</span> <span class="s1">担上</span> <span class="s1">述风险。</span></p>
                                    <p class="p1">24. Knowledge of Securities<span class="s1">,</span> Warrants and Options<span class="s1">;</span> Corporate Actions: Customer acknowledges Customer's responsibility for knowing the terms of any securities<span class="s1">,</span> options<span class="s1">,</span> warrants or other products in Customer's account<span class="s1">,</span> including upcoming corporate actions <span class="s1">(</span>e.g.<span class="s1">,</span> tender offers<span class="s1">,</span> reorganizations<span class="s1">,</span> stock splits<span class="s1">,</span> etc.<span class="s1">)</span>. IB has no obligation to notify Customer of deadlines or required actions or dates of meetings<span class="s1">,</span> nor is IB obligated to take any action without specific written instructions sent by Customer to IB electronically through the IB website. <br> <span class="s1">证券、权证与期权的知识；公司活动：客户确认客户有责任了解客户账户内任何</span> <span class="s1">证券、</span> <span class="s1">期权、权证或其它产品的条款，包括即将发生的公司活动(如股权收购要约、重组</span> <span class="s1">与股票</span> <span class="s1">分割等)。盈透无义务通知客户截止时间或所需要采取的行动或会议日期，在客户</span> <span class="s1">没有通</span> <span class="s1">过盈透网站以电子形式发出具体书面指示给盈透的情况下盈透也无义务采取任何</span> <span class="s1">行动。</span></p>
                                    <p class="p1">25. Quotes<span class="s1">,</span> Market Information<span class="s1">,</span> Research and Internet Links: Quotes<span class="s1">,</span> news<span class="s1">,</span> research and information accessible through IB <span class="s1">(</span>including through links to outside websites<span class="s1">)</span> <span class="s1">(</span>"Information"<span class="s1">)</span> may be prepared by independent Providers. The Information is the property of IB<span class="s1">,</span> the Providers or their licensors and is protected by law. Customer agrees not to reproduce<span class="s1">,</span> distribute<span class="s1">,</span> sell or commercially exploit the Information in any manner without written consent of IB or the Providers. IB reserves the right to terminate access to the Information. None of the Information constitutes a recommendation by IB or a solicitation to buy or sell. Neither IB nor the Providers guarantee accuracy<span class="s1">,</span> timeliness<span class="s1">,</span> or completeness of the Information<span class="s1">,</span> and Customer should consult an advisor before making investment decisions. RELIANCE ON QUOTES<span class="s1">,</span> DATA OR OTHER INFORMATION IS AT CUSTOMER'S OWN RISK. IN NO EVENT WILL IB OR THE PROVIDERS BE LIABLE FOR CONSEQUENTIAL<span class="s1">,</span> INCIDENTAL<span class="s1">,</span> SPECIAL OR INDIRECT DAMAGES ARISING FROM USE OF THE INFORMATION. THERE IS NO WARRANTY OF ANY KIND<span class="s1">,</span> EXPRESS OR IMPLIED<span class="s1">,</span> REGARDING THE INFORMATION<span class="s1">,</span> INCLUDING WARRANTY OF MERCHANTIBILITY<span class="s1">,</span> WARRANTY OF FITNESS FOR A PARTICULAR USE OR WARRANTY OF NON-INFRINGEMENT. <br> <span class="s1">报价、市场信息、研究与网络连接：</span> <span class="s1">通过盈透（包括通过连接到外部网站）可访</span> <span class="s1">问的报</span> <span class="s1">价、新闻、研究与信息（</span>" <span class="s1">信息</span>" <span class="s1">）可由独立的提供商编制。上述信息是盈透、</span> <span class="s1">提供商或</span> <span class="s1">其许可方的财产，受法律保护。客户同意如无盈透或提供商的书面同意不会复</span> <span class="s1">制、分发、出售或以任何方式将信息用于商业目的。盈透保有终止访问上述信息的权</span> <span class="s1">利。信息</span> <span class="s1">中的任何内容均不可视为盈透的推荐或买卖诱导。盈透与提供商均不保证本信</span> <span class="s1">息的准确</span> <span class="s1">性、及时性或完整性，客户在做出投资决策前应向顾问进行咨询。客户信赖报</span> <span class="s1">价、数据</span> <span class="s1">或其它信息，风险自负。在任何情况下盈透或提供商对使用上述信息所引起的</span> <span class="s1">偶然的、</span> <span class="s1">特殊的或间接的损害后果均不负有任何责任。不提供任何形式的担保，无论是</span> <span class="s1">与信息有</span> <span class="s1">关的明示还是暗含的、包括适销性担保、对一种特定的用途适应性的担保或非侵权担</span> <span class="s1">保。</span></p>
                                    <p class="p1">26. License to Use IB Software: IB grants Customer a non-exclusive<span class="s1">,</span> non-transferable license to use IB Software solely as provided herein. Title to IB Software and updates shall remain the sole property of IB<span class="s1">,</span> including all patents<span class="s1">,</span> copyrights and trademarks. Customer shall not sell<span class="s1">,</span> exchange or transfer the IB Software to others. Customer shall not copy<span class="s1">,</span> modify<span class="s1">,</span> translate<span class="s1">,</span> decompile<span class="s1">,</span> reverse engineer<span class="s1">,</span> disassemble or reduce to a human readable form<span class="s1">,</span> or adapt<span class="s1">,</span> the IB Software or use it to create a derivative work<span class="s1">,</span> unless authorized in writing by an officer of IB. IB is entitled to immediate injunctive relief for threatened breaches of these undertakings. <br> <span class="s1">使用</span> <span class="s1">盈透软件的许可：</span> <span class="s1">盈透授权客户非排他性的、非转让性的根据本合同的规</span> <span class="s1">定单独</span> <span class="s1">使用盈透软件的许可。盈透对其软件和更新版本仍拥有独家所权，包括所有专</span> <span class="s1">利、版</span> <span class="s1">权或商标。客户不应出售、交换或转让盈透的软件给其他人。除非获得盈透管理</span> <span class="s1">人员</span> <span class="s1">的书面授权，否则客户不应拷贝、修改、翻译、解码、反向工程、反汇编或减化为</span> <span class="s1">人</span> <span class="s1">们可读取的形式，或改编盈透软件或使用</span>IB<span class="s1">软件创建一个衍生的项目。盈透有权向法</span> <span class="s1">庭申请对违反上述承诺的威胁发布禁制令。</span></p>
                                    <p class="p1">27. LIMITATION OF LIABILITY AND LIQUIDATED DAMAGES PROVISION: CUSTOMER ACCEPTS THE IB SYSTEM "AS IS"<span class="s1">,</span> AND WITHOUT WARRANTIES<span class="s1">,</span> EXPRESS OR IMPLIED<span class="s1">,</span> INCLUDING<span class="s1">,</span> BUT NOT LIMITED TO<span class="s1">,</span> THE IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE<span class="s1">,</span> PURPOSE OR APPLICATION<span class="s1">;</span> TIMELINESS<span class="s1">;</span> FREEDOM FROM INTERRUPTION<span class="s1">;</span> OR ANY IMPLIED WARRANTIES ARISING FROM TRADE USAGE<span class="s1">,</span> COURSE OF DEALING OR COURSE OF PERFORMANCE. UNDER NO CIRCUMSTANCES SHALL IB BE LIABLE FOR ANY PUNITIVE<span class="s1">,</span> INDIRECT<span class="s1">,</span> INCIDENTAL<span class="s1">,</span> SPECIAL OR CONSEQUENTIAL LOSS OR DAMAGES<span class="s1">,</span> INCLUDING LOSS OF BUSINESS<span class="s1">,</span> PROFITS ORGOODWILL. IB SHALL NOT BE LIABLE TO CUSTOMER BY REASON OF DELAYS OR INTERRUPTIONS OF SERVICE OR TRANSMISSIONS<span class="s1">,</span> OR FAILURES OF PERFORMANCE OF THE IB SYSTEM<span class="s1">,</span> REGARDLESS OF CAUSE<span class="s1">,</span> INCLUDING<span class="s1">,</span> BUT NOT LIMITED TO<span class="s1">,</span> THOSE CAUSED BY HARDWARE OR SOFTWARE MALFUNCTION<span class="s1">;</span> GOVERNMENTAL<span class="s1">,</span> EXCHANGE OR OTHER REGULATORY ACTION<span class="s1">;</span> ACTS OF GOD<span class="s1">;</span> WAR<span class="s1">,</span> TERRORISM<span class="s1">,</span> OR IB'S INTENTIONAL ACTS. CUSTOMER RECOGNIZES THAT THERE MAY BE DELAYS OR INTERRUPTIONS IN THE USE OF THE IB SYSTEM<span class="s1">,</span> INCLUDING<span class="s1">,</span> FOR EXAMPLE<span class="s1">,</span> THOSE CAUSED INTENTIONALLY BY IB FOR PURPOSES OF SERVICING THE IB SYSTEM. IN NO EVENT SHALL IB'S LIABILITY<span class="s1">,</span> REGARDLESS OF THE FORM OF ACTION AND DAMAGES SUFFERED BY CUSTOMER<span class="s1">,</span> EXCEED THE HIGHEST TOTAL MONTHLY COMMISSIONS PAID BY CUSTOMER TO IB OVER THE 6 MONTHS PRIOR TO ANY INCIDENT. <br> <span class="s1">有限责任与违约赔偿金规定：客户接受盈透系统</span>" <span class="s1">现有的</span>" <span class="s1">状况，无明示或暗示</span> <span class="s1">的担</span> <span class="s1">保、包括但不限于对适销性或某特定用途的适应性的担保、应用目的的担保、及时</span> <span class="s1">性、免于中断的担保，或任何暗含的由交易使用、交易过程或履行过程所引起的担保。</span> <span class="s1">在任何情况下，盈透对任何惩罚性的、间接的、偶然的、特殊的或连带的损失或损害均</span> <span class="s1">不承担责任，包括业务、收益或商誉的损失。盈透对由于服务的延迟、中断或传送、或</span> <span class="s1">操作盈透的系统故障不承担责任，无论是何原因，包括但不限于那些由硬件或软件故障</span> <span class="s1">所引起的故障；政府的、交易所的或其它监管机构的行动所引起的；天灾、战争、恐怖</span> <span class="s1">主义或盈透的有意行动。客户确认在使用盈透系统时可能出现延迟或中断情况，例如包</span> <span class="s1">括那些由盈透有意为维护其系统所导致的上述问题在任何情况下，无论采取何种行动，</span> <span class="s1">无论客户遭受何种损失，盈透的责任不应超过发生的任何事故前六个月内由客户支付给</span> <span class="s1">盈透的最高的月佣金总额。</span></p>
                                    <p class="p1">28. Customer Must Maintain Alternative Trading Arrangements: Computer-based systems such as those used by IB are inherently vulnerable to disruption<span class="s1">,</span> delay or failure. CUSTOMER MUST MAINTAIN ALTERNATIVE TRADING ARRANGEMENTS IN ADDITION TO CUSTOMER'S IB ACCOUNT FOR EXECUTION OF CUSTOMER'S ORDERS IN THE EVENT THAT THE IB SYSTEM IS UNAVAILABLE. By signing this Agreement<span class="s1">,</span> Customer represents that Customer maintains alternative trading arrangements. <br> <span class="s1">客户必须保持可选择的交易安排：</span> <span class="s1">基于计算机的系统，例如盈透使用的系统，从</span> <span class="s1">本质上</span> <span class="s1">说容易中断、延迟或发生故障。除了客户的盈透账户外，客户必须做出可选择的</span> <span class="s1">交易安</span> <span class="s1">排以便在盈透系统无法使用时执行客户的定单</span>ã <span class="s1">通过签署本合同，客户表示其已</span> <span class="s1">做出可</span> <span class="s1">选择的交易安排。</span></p>
                                    <p class="p1">29. IB and Its Affiliates: A copy of IB's audited financial statements shall be posted on the IB website and<span class="s1">,</span> upon request<span class="s1">,</span> mailed to Customer. Customers shall rely only on the financial condition of IB<span class="s1">,</span> and not on its affiliates<span class="s1">,</span> which are not liable for IB's acts and omissions. <br> <span class="s1">盈透及其分支机构：经过审计的盈透财务报表应公布在盈透的网站上，并可在客</span> <span class="s1">户要</span> <span class="s1">求下邮寄给客户。客户应仅依据盈透而非其分支机构的财务状况，分支机构对盈透</span> <span class="s1">的</span> <span class="s1">行为与失误不负有责任。</span></p>
                                    <p class="p1">30. DISCLOSURE STATEMENT: THIS STATEMENT IS FURNISHED TO YOU BECAUSE RULE 190.10<span class="s1">(</span>c<span class="s1">)</span> OF THE COMMODITY FUTURES TRADING COMMISSION REQUIRES IT FOR REASONS OF FAIR NOTICE UNRELATED TO IB'S CURRENT FINANCIAL CONDITION: <span class="s1">(</span>A<span class="s1">)</span> YOU SHOULD KNOW THAT IN THE UNLIKELY EVENT OF THIS COMPANY'S BANKRUPTCY<span class="s1">,</span> PROPERTY<span class="s1">,</span> INCLUDING PROPERTY SPECIFICALLY TRACEABLE TO YOU<span class="s1">,</span> WILL BE RETURNED<span class="s1">,</span> TRANSFERRED OR DISTRIBUTED TO YOU<span class="s1">,</span> OR ON YOUR BEHALF<span class="s1">,</span> ONLY TO THE EXTENT OF YOUR PRO RATA SHARE OF ALL PROPERTY AVAILABLE FOR DISTRIBUTION TO CUSTOMERS<span class="s1">;</span> <span class="s1">(</span>B<span class="s1">)</span> NOTICE CONCERNING THE TERMS FOR THE RETURN OF SPECIFICALLY IDENTIFIABLE PROPERTY WILL BE MADE BY PUBLICATION IN A NEWSPAPER OF GENERAL CIRCULATION<span class="s1">;</span> <span class="s1">(</span>C<span class="s1">)</span> THE COMMISSION'S REGULATIONS CONCERNING BANKRUPTCIES OF COMMODITY BROKERS CAN BE FOUND AT TITLE 17 OF THE CODE OF FEDERAL REGULATIONS PART 190. <br> <span class="s1">披露声明：鉴于商品期货贸易委员会规则</span>190.10<span class="s1">(</span>c<span class="s1">)要求的与盈透当前的财政状况</span> <span class="s1">无关的</span> <span class="s1">公平通知原因，特对客户发表以下声明：(</span>A<span class="s1">)您应当知悉万一本公司破产，资产（包括客户可明确追查的资产）将被归还、转移或分配给您，或您的代表，按客户资产</span> <span class="s1">的比例分摊可分配的资产数额；(</span>B<span class="s1">)对于归还明确可识别产的通知将通过一般流通的报纸</span> <span class="s1">发行公告。(</span>C<span class="s1">)委员会关于商品经纪人破产的监管条例列于联邦法规条例</span>190<span class="s1">第</span>17<span class="s1">法令。</span></p>
                                    <p class="p1">31. Consent To Accept Electronic Records And Communications <br> IB provides electronic trade confirmations<span class="s1">,</span> account statements<span class="s1">,</span> tax information and other Customer records and communications <span class="s1">(</span>collectively<span class="s1">,</span> "Records and Communications"<span class="s1">)</span> in electronic form. Electronic Records and Communications may be sent to Customer's Trader Workstation <span class="s1">(</span>"TWS"<span class="s1">)</span> or to Customer's e-mail address<span class="s1">,</span> or for security purposes may be posted on the IB website and customer will need to log in and retrieve the Communication. By entering into this Agreement<span class="s1">,</span> Customer consents to the receipt of electronic Records and Communications. Such consent will apply on an ongoing basis and for every tax year unless withdrawn by Customer. Customer may withdraw such consent at any time by providing electronic notice to IB through the IB website. If Customer withdraws such consent<span class="s1">,</span> IB will provide required tax documents in paper form upon request by telephone or via the IB website. However<span class="s1">,</span> IB reserves the right to require Customer to close Customer's account. <br> <span class="s1">盈透通过电子形式提供电子交易确认书、账单、税务信息与其它客户记录与通信联</span> <span class="s1">系，(以下简称</span>" <span class="s1">电子记录与通信联系</span>" <span class="s1">)。电子记录与通信联系可发送到客户的交易</span> <span class="s1">平</span> <span class="s1">台或发送到客户的电子邮件地址或为了安全起见公布在盈透的网站上，同时通知</span> <span class="s1">客户登录并检索上述通信联系。通过签署本合同，客户同意接收电子记录与通信联</span> <span class="s1">系。除非客户收回其同意，否则上述同意持续适用，并适用于每个税务年度。客户</span> <span class="s1">可在任何时候通过盈透的网站以电子方式通知盈透收回其同意。如果客户收回其同</span> <span class="s1">意，则当客户通过电话或通过盈透网站要求时，盈透应提供纸质形式的税务文件。</span> <span class="s1">但是，盈透保留要求客户关闭其账户的权利。</span> In order to trade using the IB TWS<span class="s1">,</span> and to receive Records and Communications through the TWS<span class="s1">,</span> there are certain system hardware and software requirements<span class="s1">,</span> which are described on the IB website at www.interactivebrokers.com. Since these requirements may change<span class="s1">,</span> Customer must periodically refer to the IB website for current system requirements. To receive electronic mail from IB<span class="s1">,</span> Customer is responsible for maintaining a valid Internet e-mail address and software allowing customer to read<span class="s1">,</span> send and receive e-mail. Customer must notify IB immediately of a change in Customer's e-mail address by using those procedures to change a Customer e-mail address that may be available on the IB website. <br> <span class="s1">为了使用盈透的交易平台（“</span>TWS<span class="s1">”）进行交易，和通过交易平台接收电子记录与通</span> <span class="s1">信联系，对系统软件和硬件有一些要求，这些要求在盈透的网站</span> www.interactivebrokers.com<span class="s1">进行说明。由于上述要求可能发生变化，客户必须定</span> <span class="s1">期</span> <span class="s1">访问盈透网站，了解当前的系统要求。要想收到盈透的电子邮件，客户负责维护</span> <span class="s1">一</span> <span class="s1">个有效的因特网电子邮件地址和软件，以允许客户阅读、发送、接收电子邮件。</span> <span class="s1">当</span> <span class="s1">客户邮件地址变化时，客户必须通过这些程序立刻通知盈透，以便更改盈透网站</span> <span class="s1">上</span> <span class="s1">的客户邮件地址。</span></p>
                                    <p class="p1">32. Miscellaneous: <br> <span class="s1">其他：</span> <br> A. This Agreement is governed by the laws of the State of New York<span class="s1">,</span> without giving effect to conflict of laws provisions. Courts of New York have exclusive jurisdiction over disputes relating to this Agreement<span class="s1">,</span> except when arbitration is provided. IN ALL JUDICIAL ACTIONS<span class="s1">,</span> ARBITRATIONS OR DISPUTE RESOLUTION METHODS<span class="s1">,</span> THE PARTIES WAIVE ANY RIGHT TO PUNITIVE DAMAGES. <br> <span class="s1">本合同受美国康涅狄格州法律的管辖，与法律规定相抵触的条款不予生效。康涅狄格州</span> <span class="s1">的法院对与本合同有关的争议具有专有管辖权。除了有仲裁规定时例外。在所有司法行为、仲裁或</span> <span class="s1">争议的解决方法中，合同各方放弃任何的损害性赔偿的权利。</span> <br> B. Customer agrees to the provision of this Agreement in English and represents that Customer understands its terms and conditions. This Agreement contains the entire agreement between the parties<span class="s1">,</span> who have made no other representations or warranties. If any provision of this Agreement is unenforceable<span class="s1">,</span> it shall not invalidate other provisions. Failure of IB to enforce any term or condition of this Agreement is not a waiver of the term/ condition. <br> <span class="s1">客户同意本合同的规定以英文书写且表示客户理解本合同的条款。本合同包括</span> <span class="s1">合同双</span> <span class="s1">方之间的完整合同，除此以外，合同双方不做出其它陈述或担保。如本合同中的任何规定不可执</span> <span class="s1">行，不应影响其它规定的效力。盈透未能履行本合同的任何条款不可视为其对合同条款的放弃。</span> <br> C. Customer consents to recording of all telephone conversations. Customer acknowledges the IBG Privacy Statement and consents to collection/use of Customer information as described therein. <br> <span class="s1">客户同意录音所有电话内容。客户确认盈透隐私声明且同意根据其规定收集／使用客户信息。</span> <br> D. Customer may not assign or transfer any rights or obligations hereunder without the prior written consent of IB. Upon notice to Customer IB may assign this Agreement to another broker-dealer or futures commission merchant. This Agreement shall inure to the benefit of IB's successors and assigns. IB may terminate this Agreement or its services to Customer at any time. Customer may close its account upon notice to IB electronically through the IB website<span class="s1">,</span> but only after all positions are closed and all other requirements specified on the IB website regarding account closure are satisfied. <br> <span class="s1">如无盈透的事先书面同意，客户不可出让或转让本合同下的任何权利或义务。在向客户</span> <span class="s1">发出通知后，盈透可将本合同转让给另一经纪人－交易商或期货经纪商。本合同应保证盈透继承者</span> <span class="s1">或受让人的利益。盈透可在任何时候终止本合同或向客户提供服务。客户可通过盈透的网站以电子</span> <span class="s1">方式通知盈透后关闭其账户，但只有在所有仓位清仓后，并满足盈透网站上规定的关闭账户的所有</span> <span class="s1">其它要求。</span> <br> E. Customer authorizes IB<span class="s1">,</span> directly or through third parties<span class="s1">,</span> to make any inquiries that IB considers necessary to conduct business with Customer. This may include ordering a credit report and performing other credit checks in the event of any default or breach of the obligations herein by Customer<span class="s1">,</span> or verifying the information Customer provides against third party databases. Any information obtained is maintained in accordance with the Interactive Brokers Group Privacy Statement. <br> <span class="s1">客户直接或经第三方授权盈透就其认为其在与客户进行商业活动时所必须的信息询问客</span> <span class="s1">户。询问可包括在客户发生任何违约或违法本协议义务时而索取的信用报</span> <span class="s1">告及其它信用检查，或</span> <span class="s1">核</span> <span class="s1">对客户向第三方数据库提供的信息。盈透获取的信息将遵循盈透集团隐私声明保护。</span></p>
                                    <p class="p1">33. Mandatory Arbitration: <br> <span class="s1">强制性仲裁：</span> <br> A. This agreement contains a pre-dispute arbitration clause. By signing an arbitration agreement the parties agree as follows: <br> • ALL PARTIES TO THIS AGREEMENT ARE GIVING UP THE RIGHT TO SUE EACH OTHER IN COURT<span class="s1">,</span> INCLUDING THE RIGHT TO A TRIAL BY JURY<span class="s1">,</span> EXCEPT AS PROVIDED BY THE RULES OF THE ARBITRATION FORUM IN WHICH A CLAIM IS FILED. <br> • ARBITRATION AWARDS ARE GENERALLY FINAL AND BINDING<span class="s1">;</span> A PARTY'S ABILITY TO HAVE A COURT REVERSE OR MODIFY AN ARBITRATION AWARD IS VERY LIMITED. <br> • THE ABILITY OF THE PARTIES TO OBTAIN DOCUMENTS<span class="s1">,</span> WITNESS STATEMENTS AND OTHER DISCOVERY IS GENERALLY MORE LIMITED IN ARBITRATION THAN IN COURT PROCEEDINGS. <br> • THE ARBITRATORS DO NOT HAVE TO EXPLAIN THE REASON<span class="s1">(</span>S<span class="s1">)</span> FOR THEIR AWARD. UNLESS<span class="s1">,</span> IN AN ELIGIBLE CASE<span class="s1">,</span> A JOINT REQUEST FOR AN EXPLAINED DECISION HAS BEEN SUBMITTED BY ALL PARTIES TO THE PANEL AT LEAST 20 DAYS PRIOR TO THE FIRST SCHEDULED HEARING DATE. <br> • THE PANEL OF ARBITRATORS WILL TYPICALLY INCLUDE A MINORITY OF ARBITRATORS WHO WERE OR ARE AFFILIATED WITH THE SECURITIES INDUSTRY. <br> • THE RULES OF SOME ARBITRATION FORUMS MAY IMPOSE TIME LIMITS FOR BRINGING A CLAIM IN ARBITRATION. <br> • IN SOME CASES<span class="s1">,</span> A CLAIM THAT IS INELIGIBLE FOR ARBITRATION MAY BE BROUGHT IN COURT. <br> • THE RULES OF THE ARBITRATION FORUM IN WHICH THE CLAIM IS FILED<span class="s1">,</span> AND ANY AMENDMENTS THERETO<span class="s1">,</span> SHALL BE INCORPORATED INTO THIS AGREEMENT. <br> A. <span class="s1">该合同包含预争议仲裁条款。签署仲裁协议代表各方同意以下条款：</span> <br> • <span class="s1">本合同的所有各方均放弃将另一方起诉至法庭的权利，包括由陪审团进行审判的权</span> <span class="s1">利，除非接受索赔的仲裁机构另有规定。</span> <br> • <span class="s1">仲裁判决一般来说是终局且必须遵守的；一方让法庭推翻或修改仲裁判决的能力是</span> <span class="s1">非常有限的。</span> <br> • <span class="s1">合同各方在仲裁中获得文件、证人证言与其它证据调查程序的能力通常比在法庭审</span> <span class="s1">理程序中更为有限。</span> <br> • <span class="s1">仲裁人员不必解释做出仲裁裁决的原因。</span> <br> • <span class="s1">除非具有合理的解释，各方至少在首次听证日前不少于</span>20<span class="s1">天向陪审员小组提</span> <span class="s1">交联名请求，要求审判决定附带解释。</span> <br> • <span class="s1">仲裁团内通常会包括少数以前或现在与证券行业有关的仲裁员。</span> <br> • <span class="s1">某些仲裁委员会的仲裁规则可能对仲裁中的权利要求施加时间限制。</span> <br> • <span class="s1">在一些案例中，对于不适合于仲裁的权利要求可向法院提起诉讼。</span> <br> • <span class="s1">接受索赔的仲裁委员会的规则和任何相关修订应纳入本合同。</span> <br> B. Customer agrees that any controversy<span class="s1">,</span> dispute<span class="s1">,</span> claim<span class="s1">,</span> or grievance between IB<span class="s1">,</span> any IB affiliate or any of their shareholders<span class="s1">,</span> officers<span class="s1">,</span> directors employees<span class="s1">,</span> associates<span class="s1">,</span> or agents<span class="s1">,</span> on the one hand<span class="s1">,</span> andCustomer or<span class="s1">,</span> if applicable<span class="s1">,</span> Customer's shareholders<span class="s1">,</span> officers<span class="s1">,</span> directors employees<span class="s1">,</span> associates<span class="s1">,</span> or agents on the other hand<span class="s1">,</span> arising out of<span class="s1">,</span> or relating to<span class="s1">,</span> this Agreement<span class="s1">,</span> or any account<span class="s1">(</span>s<span class="s1">)</span> established hereunder in which securities may be traded<span class="s1">;</span> any transactions therein<span class="s1">;</span> any transactions between IB and Customer<span class="s1">;</span> any provision of the Customer Agreement or any other agreement between IB and Customer<span class="s1">;</span> or any breach of such transactions or agreements<span class="s1">,</span> shall be resolved by arbitration<span class="s1">,</span> in accordance with the rules then prevailing of any one of the following: <span class="s1">(</span>a<span class="s1">)</span> The Financial Industry Regulatory Authority<span class="s1">;</span> or <span class="s1">(</span>b<span class="s1">)</span> any other exchange of which IB is a member<span class="s1">,</span> as the true claimant-in- interest may elect. If Customer is the claimant-in-interest and has not selected an arbitration forum within ten days of providing notice of Customer's intent to arbitrate<span class="s1">,</span> IB shall select the forum. The award of the arbitrators<span class="s1">,</span> or a majority of them<span class="s1">,</span> shall be final<span class="s1">,</span> and judgment upon the award rendered may be entered in any court<span class="s1">,</span> state or federal<span class="s1">,</span> having jurisdiction. <br> B<span class="s1">．客户同意，当作为一方的盈透、任何盈透分支机构或其任何股东、官员、董事雇</span> <span class="s1">员、伙伴、或代理与作为另一方的客户、或如适用，其股东、官员、董事雇员、伙伴、或代理之间因为或关于本合同或根据本合同所设立的用于交易证券的任何帐户（证券</span> <span class="s1">交易帐户）；其中的任何交易；盈透与客户间完成的任何交易；客户合同或盈透与客户签</span> <span class="s1">订的任何其他合同的任何规定；或违反任何交易或合同等而发生任何争议、纠纷、索赔或</span> <span class="s1">不满时，这些争议、纠纷、索赔或不满应通过下列任何其中一家仲裁组织的主要规定仲裁</span> <span class="s1">解决：(</span>a<span class="s1">)</span> <span class="s1">美国仲裁协会；(</span>b<span class="s1">)</span> <span class="s1">美国金融业监管局；或(</span>c<span class="s1">)盈透为其成员的任何其它交易</span> <span class="s1">所，</span> <span class="s1">由具体的权利要求请求人选择决定。如客户为权利人，但客户在其发出仲裁意向通知</span> <span class="s1">后</span> <span class="s1">十天内并未选择任何仲裁庭，则盈透应选择仲裁庭。仲裁员或多数仲裁员做出的裁决应</span> <span class="s1">为终局的，仲裁做出的判决可记录在具有管辖权的任何州或联邦法庭。</span> <br> C. No person shall bring a putative or certified class action to arbitration<span class="s1">,</span> nor seek to enforce any pre- dispute arbitration agreement against any person who has initiated in court a putative class action<span class="s1">;</span> or who is a member of a putative class who has not opted out of the class with respect to any claims encompassed by the putative class action until: <br> • the class certification is denied<span class="s1">;</span> or <br> • the class is decertified<span class="s1">;</span> or <br> • the customer is excluded from the class by the court. Such forbearance to enforce an agreement to arbitrate shall not constitute a waiver of any rights under this Agreement except to the extent stated herein. <br> C.<span class="s1">任何人均不得将一项法院可能判决或已经判决的集体诉讼提交仲裁，也不得对已认定向</span> <span class="s1">法院提起集体诉讼的人士，或已经是集体诉讼中一员且未因集体诉讼所包括的任何索赔而</span> <span class="s1">退出的人士，强迫执行预争议仲裁合同，除非：</span> <br> • <span class="s1">集体诉讼被拒绝，或</span> <br> • <span class="s1">该集体诉讼的法院受理被取消；或</span> <br> • <span class="s1">法院已将该客户排除在该集体诉讼之外。除于此说明外，强制以仲裁方式解决合同纠</span> <span class="s1">纷的行为并不构成放弃本合同内的任何权利。</span></p>
                                    <p>&nbsp;</p>
                                    <p class="p1">THIS AGREEMENT CONTAINS A PRE-DISPUTE ARBITRATION CLAUSE IN PARAGRAPH 33. BY SIGNING THIS AGREEMENT I ACKNOWLEDGE THAT THIS AGREEMENT CONTAINS A PRE-DISPUTE ARBITRATION CLAUSE AND THAT I HAVE RECEIVED<span class="s1">,</span> READ AND UNDERSTOOD THE TERMS THEREOF. <br> <span class="s1">本合同在第</span>33<span class="s1">段中包含一条预争议仲裁条款。签署合同表示本人知晓合同中包含一条预</span> <span class="s1">争议仲</span> <span class="s1">裁条款，且本人已收到、阅读并理解上述条款。</span> <br> <br> <span class="s1">声明：本翻译文件仅以提供方便为目的。</span>IBLLC <span class="s1">并不保证或确保翻译的完整性或正确性。在英文原文</span> <span class="s1">与中文翻译本不一致的情况下，应以英文版为准。</span></p></div>
                                <div class="form-group-control form-inline ios-style" pattern="/^1$/" required="">
                                    <div class="group"><input value="1" type="radio" v-model="agreement_3" v-validate="{required:true}" name="agreement_3">本人同意
                                </div>
                                <div class="group">
                                    <input type="radio" value="0" v-model="agreement_3" v-validate="{required:true}" name="agreement_3">本人不同意
                                </div>
                            </div>
                            <div v-if="errors.has('agreement_3')" class="form-submit-error a-flipinX">{{ errors.first('agreement_3') }}</div>
                        </div>
                        <div class="agreement-group opened">
                            <a href="javascript:;" class="title">免责及隐私声明</a>
                            <div class="content"><p class="p1">一、 免责声明</p>
                                <p class="p1">（一）风险免责</p>
                                <p class="p1"><span class="s1">1. </span>所有投资都存在风险。任何一支证券或金融产品的历史数据都不能保证其未来的表现及回报。虽然投资多样化可以帮助分散风险，但是并不能在市场低迷时确保您获益或防止您损失。投资证券或金融产品总会存在潜在的亏损可能。您在进行投资前需考虑自身的投资目标及风险承受能力。当您使用本产品时，即表示您已阅读、了解并接受本声明内所有内容，并表明您已完全了解可能存在的风险并同意承担使用本产品存在的全部风险。您应明确使用本产品并不能完全规避投资风险，老虎证券不对您投资利益的损失和风险承担任何责任。</p>
                                <p class="p1"><span class="s1">2. </span>老虎证券及其关联公司将竭力确保所提供信息的真实性、充分性、可靠性和准确性，但不能保证其绝对可靠和准确，所有信息、数据、资料仅作为参考。您须谨慎判断本产品中的行情价格、图表、评论和购买或者其他信息的准确性。因任何内容不准确或遗漏或您的主观原因引起的损失，老虎证券不承担任何责任。</p>
                                <p class="p1"><span class="s1">3. </span>在适用法律允许的最大范围内，对因使用或不能使用本产品所产生的损失及风险，包括但不限于直接或间接的个人损害、商业赢利的丧失、贸易中断、商业信息的丢失或任何其它经济损失， 老虎证券不承担任何责任。</p>
                                <p class="p1">（二）因用户过失或违约免责</p>
                                <p class="p1"><span class="s1">4. </span>老虎证券有权随时修改或变更本声明，修改或变更后的条款应于公示时即时生效。本声明修改或变更后，您继续使用本产品的，都将视为您已经阅读、了解并接受修改或变更后的声明条款。如您以未阅读、不了解、不接受修改或变更后的声明条款为由主张损失赔偿的，老虎证券不承担任何责任。</p>
                                <p class="p1"><span class="s1">5. </span>您须确认已知悉本产品的功能及为实现产品功能所进行的必要操作，根据自身需求自愿选择使用老虎产品及相关服务。如因您使用老虎产品及相关服务时因您的个人疏忽或操作失误造成损失的，老虎证券不承担任何责任。</p>
                                <p class="p1"><span class="s1">6. </span>如您为任何非法目的或以任何非法方式使用本产品，利用老虎证券提供的服务从事任何违法或侵害他人权益行为，给您和第三人造成损失的，老虎证券不承担任何赔偿责任。</p>
                                <p class="p1"><span class="s1">7. </span>本产品所使用的软件或程序、产品上所有内容，包括但不限于著作、图片、档案、资讯、资料、产品架构、产品设计，均由老虎证券或其他权利人依法拥有其知识产权，包括但不限于商标权、专利权、著作权、营业秘密与专有技术等。如您未经老虎证券或其他权利人事前书面同意，擅自使用、修改、重制、公开播送、改作、散布、发行、公开发表、进行还原工程、解编或反向编译本产品给您和第三人造成损失的，老虎证券不承担任何赔偿责任，且有权要求您承担侵犯知识产权之责任。</p>
                                <p class="p1"><span class="s1">8. </span>在使用本产品过程中，如因您个人原因出现账户密码、个人信息、交易资料泄露或您的身份被仿冒等情形，给您造成损失的，老虎证券不承担任何赔偿责任。</p>
                                <p class="p1">（三）客观免责</p>
                                <p class="p1"><span class="s1">9. </span>本产品经过详细、严密的测试，但不能保证与所有的软硬件系统完全兼容，不能保证本产品完全没有错误。如果出现不兼容及软件错误的情况，您可拨打老虎证券客服电话（<span class="s1">4000–588–588</span>）将情况报告老虎证券，获得技术支持，但无法获得老虎证券的经济赔偿。</p>
                                <p class="p1"><span class="s1">10.</span>对于因电信系统或互联网网络故障、计算机故障或病毒、信息损坏或丢失、计算机系统问题或其它任何不可抗力原因（如战争、通讯故障、自然灾害、罢工、政府行为）而产生的损失，老虎证券不承担任何责任。</p>
                                <p class="p1"><span class="s1">11.</span>本产品所提供的服务可能因互联网数据传输故障、中断、延迟等客观因素出现中断、故障等现象，存在本产品功能无法实现之虞。此情形下，如您因迟延使用或无法使用本产品所提供的服务而遭受损失的，老虎证券不承担赔偿责任。建议您使用本产品时也采取合理、有效的防护措施。</p>
                                <p class="p1"><span class="s1">12.</span>根据公司经营之需要，老虎证券将会在本产品中刊登、转载合作公司提供的新闻、资讯等内容，刊登、转载时均会注明内容提供者。基于尊重内容提供者的知识产权，老虎证券对其提供的内容不作任何实质性审查或修改，不保证该内容的真实性，请您自行判断。若您认为某些内容涉及侵权或不实，请自行向该内容的提供者反映意见。</p>
                                <p class="p1">二、 隐私保护</p>
                                <p class="p1">老虎证券致力于为您提供最佳的证券服务和最优的产品体验。</p>
                                <p class="p1">为了您的个人信息安全性与保密性，我们确定以下保密守则。在老虎证券开户、使用本产品及老虎证券的其他服务都将代表您同意以下保密守则，建议您仔细阅读。</p>
                                <p class="p1">（一） 根据法律监管要求，老虎证券将搜集您以下的非公共信息：</p>
                                <p class="p1"><span class="s1">1. </span>身份信息和就业信息；</p>
                                <p class="p1"><span class="s1">2. </span>账户余额和交易历史；</p>
                                <p class="p1"><span class="s1">3. </span>信用历史和投资经验。</p>
                                <p class="p1">（二） 个人信息保护措施</p>
                                <p class="p1">为了保护您的个人信息，我们将使用符合法律要求的安全措施包括但不限于电脑防护、文件加密及安全办公楼等，对您的个人资料进行严格管理和保护，防范未经授权的访问和使用，防止您的个人资料丢失、被盗用或窜改。</p>
                                <p class="p1">（三） 个人资料披露</p>
                                <p>&nbsp;</p>
                                <p class="p1">除非法律、法规要求，否则老虎证券不会将您的个人、非公开信息披露给第三方。</p>
                            </div>
                            <div class="form-group-control form-inline ios-style" pattern="/^1$/" required="">
                                <div class="group">
                                    <input type="radio" value="1" v-model="agreement_4" v-validate="{required:true}" name="agreement_4">本人同意
                                </div>
                                <div class="group">
                                    <input type="radio" value="0" v-model="agreement_4" v-validate="{required:true}" name="agreement_4">本人不同意</div>
                                </div>
                                <div v-if="errors.has('agreement_4')" class="form-submit-error a-flipinX">{{ errors.first('agreement_4') }}</div>
                        </div>
                    <div class="agreement-group opened">
                        <a href="javascript:;" class="title">其他交易品种协议和披露声明</a>
                        <div class="content"><p class="p1">Futures Trading Arbitration Agreement</p>
                            <p class="p1">If you trade stocks or stock options in your IB account<span class="s1">,</span> you will be covered by a mandatory arbitration agreement<span class="s1">,</span> which states that any disputes regarding your account will be resolved through arbitration. The following optional arbitration agreement covers trading in futures or options on futures<span class="s1">,</span> in the event that you and your advisor choose to trade these investment products in your account. You are not required to sign the Futures Trading Arbitration Agreement below<span class="s1">,</span> but if you do not sign it your account will be restricted to a one contract trading limit.</p>
                            <p class="p1">Futures Trading Arbitration Agreement: Any controversy or claim between Interactive Brokers LLC <span class="s1">(</span>"IB"<span class="s1">)</span> and the undersigned <span class="s1">(</span>"Customer"<span class="s1">)</span> arising out of or relating to Customer's Account with IB<span class="s1">,</span> to transactions between IB and Customer<span class="s1">,</span> to the Customer Agreement with IB or any other agreement between IB and Customer<span class="s1">,</span> or to the breach of any such transaction or agreement shall<span class="s1">,</span> except as provided below<span class="s1">,</span> be resolved by arbitration before a forum chosen in accordance with the procedure set out below. If<span class="s1">,</span> by reason of any applicable statute<span class="s1">,</span> regulation<span class="s1">,</span> exchange rule or otherwise<span class="s1">,</span> Customer's advance agreement to submit a controversy to arbitration would not be enforceable by IB<span class="s1">,</span> this provision shall not permit Customer to enforce IB's advance agreement to submit to arbitration. Any award rendered in any arbitration conducted pursuant to this agreement shall be final<span class="s1">,</span> binding and enforceable in accordance with the laws of the State of Connecticut and judgment may be entered on any such award by any court having jurisdiction thereof.</p>
                            <p class="p1">At such time as Customer notifies IB that Customer intends to submit a claim to arbitration<span class="s1">,</span> or at such time as IB notifies Customer that IB intends to submit a claim to arbitration<span class="s1">,</span> Customer will have the opportunity to choose a forum from a list of three or more qualified forums provided by IB. A "qualified forum" is an organization whose procedures for conducting arbitrations comply with the requirements of the Commodity Futures Trading Commission <span class="s1">(</span>"CFTC"<span class="s1">)</span> Rule 166.5.</p>
                            <p class="p1">As required by CFTC Rule 166.5<span class="s1">,</span> IB will pay any incremental fees which may be assessed by a qualified forum for provision of a mixed arbitration panel<span class="s1">,</span> unless the arbitrators hearing the controversy determine that Customer has acted in bad faith in initiating or conducting the arbitration. A "mixed arbitration panel" is an arbitration panel composed of one or more persons<span class="s1">,</span> a majority of whom are not members or associated with a member of a contract market or employee thereof<span class="s1">,</span> and who are not otherwise associated with a contract market.</p>
                            <p class="p1">In connection with this Arbitration Agreement<span class="s1">,</span> IB is required to furnish to you the following statement<span class="s1">,</span> pursuant to Rule 166.5 of the CFTC:</p>
                            <p class="p1">THREE FORUMS EXIST FOR THE RESOLUTION OF COMMODITY DISPUTES: CIVIL COURT LITIGATION<span class="s1">,</span> REPARATIONS AT THE COMMODITY FUTURES TRADING COMMISSION <span class="s1">(</span>"CFTC"<span class="s1">),</span> AND ARBITRATION CONDUCTED BY A SELF-REGULATORY OR OTHER PRIVATE ORGANIZATION.</p>
                            <p class="p1">THE CFTC RECOGNIZES THAT THE OPPORTUNITY TO SETTLE DISPUTES BY ARBITRATION MAY IN SOME CASES PROVIDE MANY BENEFITS TO CUSTOMERS<span class="s1">,</span> INCLUDING THE ABILITY TO OBTAIN AN EXPEDITIOUS AND FINAL RESOLUTION OF DISPUTES WITHOUT INCURRING SUBSTANTIAL COSTS. THE CFTC REQUIRES<span class="s1">,</span> HOWEVER<span class="s1">,</span> THAT EACH CUSTOMER INDIVIDUALLY EXAMINE THE RELATIVE MERITS OF ARBITRATION AND THAT YOUR CONSENT TO THIS ARBITRATION AGREEMENT BE VOLUNTARY.</p>
                            <p class="p1">BY SIGNING THIS AGREEMENT<span class="s1">,</span> YOU: <span class="s1">(</span>1<span class="s1">)</span> MAY BE WAIVING YOUR RIGHT TO SUE IN A COURT OF LAW<span class="s1">;</span> AND <span class="s1">(</span>2<span class="s1">)</span> ARE AGREEING TO BE BOUND BY ARBITRATION OF ANY CLAIMS OR COUNTERCLAIMS WHICH YOU OR IB MAY SUBMIT TO ARBITRATION UNDER THIS AGREEMENT. YOU ARE NOT<span class="s1">,</span> HOWEVER<span class="s1">,</span> WAIVING YOUR RIGHT TO ELECT INSTEAD TO PETITION THE CFTC TO INSTITUTE REPARATIONS PROCEEDINGS UNDER SECTION 14 OF THE COMMODITY EXCHANGE ACT WITH RESPECT TO ANY DISPUTE WHICH MAY BE ARBITRATED PURSUANT TO THIS AGREEMENT. IN THE EVENT A DISPUTE ARISES<span class="s1">,</span> YOU WILL BE NOTIFIED IF IB INTENDS TO SUBMIT THE DISPUTE TO ARBITRATION. IF YOU BELIEVE A VIOLATION OF THE COMMODITY EXCHANGE ACT IS INVOLVED AND IF YOU PREFER TO REQUEST A SECTION 14 "REPARATIONS" PROCEEDING BEFORE THE CFTC<span class="s1">,</span> YOU WILL HAVE 45 DAYS FROM THE DATE OF SUCH NOTICE IN WHICH TO MAKE THAT ELECTION. YOU NEED NOT SIGN THIS AGREEMENT TO OPEN OR MAINTAIN AN ACCOUNT WITH IB. SEE 17 CFR 166.5.</p>
                            <p class="p1">I hereby acknowledge that I have read and understood and that I agree to the Futures Trading Arbitration Agreement:</p>
                            <p class="p1">RISK DISCLOSURE STATEMENT FOR FOREX TRADING AND IB MULTI-CURRENCY ACCOUNTS</p>
                            <p class="p1">Rules of the U.S. National Futures Association <span class="s1">(</span>"NFA"<span class="s1">)</span> require Interactive Brokers <span class="s1">(</span>"IB"<span class="s1">)</span> to provide you with the following Risk Disclosure Statement</p>
                            <p class="p1">RISK DISCLOSURE STATEMENT<br> OFF-EXCHANGE FOREIGN CURRENCY <span class="s1">(</span>"FOREX"<span class="s1">)</span> TRANSACTIONS INVOLVE THE LEVERAGED TRADING OF CONTRACTS DENOMINATED IN FOREIGN CURRENCY CONDUCTED WITH A FUTURES COMMISSION MERCHANT OR A RETAIL FOREIGN EXCHANGE DEALER AS YOUR COUNTERPARTY. BECAUSE OF THE LEVERAGE AND THE OTHER RISKS DISCLOSED HERE<span class="s1">,</span> YOU CAN RAPIDLY LOSE ALL OF THE FUNDS YOU DEPOSIT FOR SUCH TRADING AND YOU MAY LOSE MORE THAN YOU DEPOSIT.</p>
                            <p class="p1">YOU SHOULD BE AWARE OF AND CAREFULLY CONSIDER THE FOLLOWING POINTS BEFORE DETERMINING WHETHER SUCH TRADING IS APPROPRIATE FOR YOU.</p>
                            <p class="p1">1. TRADING IS NOT ON A REGULATED MARKET OR EXCHANGE - YOUR DEALER IS YOUR TRADING PARTNER WHICH IS A DIRECT CONFLICT OF INTEREST. <br> EFORE YOU ENGAGE IN ANY RETAIL FOREIGN EXCHANGE TRADING<span class="s1">,</span> YOU SHOULD CONFIRM THE REGISTRATION STATUS OF YOUR COUNTERPARTY. The off-exchange foreign currency trading you are entering into is not conducted on an interbank market<span class="s1">,</span> nor is it conducted on a futures exchange subject to regulation as a designated contract market by the Commodity Futures Trading Commission <span class="s1">(</span>"CFTC"<span class="s1">)</span>. The foreign currency trades you transact are trades with the futures commission merchant or retail foreign exchange dealer as your counterparty. WHEN YOU SELL<span class="s1">,</span> THE DEALER IS THE BUYER. WHEN YOU BUY<span class="s1">,</span> THE DEALER IS THE SELLER. As a result<span class="s1">,</span> when you lose money trading<span class="s1">,</span> your dealer is making money on such trades<span class="s1">,</span> in addition to any fees<span class="s1">,</span> commissions<span class="s1">,</span> or spreads the dealer may charge.</p>
                            <p class="p1">2. AN ELECTRONIC TRADING PLATFORM FOR RETAIL FOREIGN CURRENCY TRANSACTIONS IS NOT AN EXCHANGE. IT IS AN ELECTRONIC CONNECTION FOR ACCESSING YOUR DEALER. THE TERMS OF AVAILABILITY OF SUCH A PLATFORM ARE GOVERNED ONLY BY YOUR CONTRACT WITH YOUR DEALER. <br> Any trading platform that you may use to enter off-exchange foreign currency transactions is only connected to your futures commission merchant or retail foreign exchange dealer. You are accessing that trading platform only to transact with your dealer. You are not trading with any other entities or customers of the dealer by accessing such platform. The availability and operation of any such platform<span class="s1">,</span> including the consequences of the unavailability of the trading platform for any reason<span class="s1">,</span> is governed only by the terms of your account agreement with the dealer.</p>
                            <p class="p1">3. YOUR DEPOSITS WITH THE DEALER HAVE NO REGULATORY PROTECTIONS. <br> All of your rights associated with your retail forex trading<span class="s1">,</span> including the manner and denomination of any payments made to you<span class="s1">,</span> are governed by the contract terms established in your account agreement with the futures commission merchant or retail foreign exchange dealer. Funds deposited by you with a futures commission merchant or retail foreign exchange dealer for trading off-exchange foreign currency transactions are not subject to the customer funds protections provided to customers trading on a contract market that is designated by the CFTC. Your dealer may commingle your funds with its own operating funds or use them for other purposes. In the event your dealer becomes bankrupt<span class="s1">,</span> any funds the dealer is holding for you in addition to any amounts owed to you resulting from trading<span class="s1">,</span> whether or not any assets are maintained in separate deposit accounts by the dealer<span class="s1">,</span> may be treated as an unsecured creditor's claim.</p>
                            <p class="p1">4. YOU ARE LIMITED TO YOUR DEALER TO OFFSET OR LIQUIDATE ANY TRADING POSITIONS SINCE THE TRANSACTIONS ARE NOT MADE ON AN EXCHANGE OR MARKET<span class="s1">,</span> AND YOUR DEALER MAY SET ITS OWN PRICES. <br> Your ability to close your transactions or offset positions is limited to what your dealer will offer to you<span class="s1">,</span> as there is no other market for these transactions. Your dealer may offer any prices it wishes<span class="s1">,</span> and it may offer prices derived from outside sources or not in its discretion. Your dealer may establish its prices by offering spreads from third party prices<span class="s1">,</span> but it is under no obligation to do so or to continue to do so. Your dealer may offer different prices to different customers at any point in time on its own terms. The terms of your account agreement alone govern the obligations your dealer has to you to offer prices and offer offset or liquidating transactions in your account and make any payments to you. The prices offered by your dealer may or may not reflect prices available elsewhere at any exchange<span class="s1">,</span> interbank<span class="s1">,</span> or other market for foreign currency.</p>
                            <p class="p1">5. PAID SOLICITORS MAY HAVE UNDISCLOSED CONFLICTS <br> <br> The futures commission merchant or retail foreign exchange dealer may compensate introducing brokers for introducing your account in ways which are not disclosed to you. Such paid solicitors are not required to have<span class="s1">,</span> and may not have<span class="s1">,</span> any special expertise in trading<span class="s1">,</span> and may have conflicts of interest based on the method by which they are compensated. Solicitors working on behalf of futures commission merchants and retail foreign exchange dealers are required to register. You should confirm that they are<span class="s1">,</span> in fact registered. You should thoroughly investigate the manner in which all such solicitors are compensated and be very cautious in granting any person or entity authority to trade on your behalf. You should always consider obtaining dated written confirmation of any information you are relying on from your dealer or a solicitor in making any trading or account decisions. <br> <br> FINALLY<span class="s1">,</span> YOU SHOULD THOROUGHLY INVESTIGATE ANY STATEMENTS BY ANY DEALERS OR SALES REPRESENTATIVES WHICH MINIMIZE THE IMPORTANCE OF<span class="s1">,</span> OR CONTRADICT<span class="s1">,</span> ANY OF THE TERMS OF THIS RISK DISCLOSURE. SUCH STATEMENTS MAY INDICATE POTENTIAL SALES FRAUD. <br> <br> THIS BRIEF STATEMENT CANNOT<span class="s1">,</span> OF COURSE<span class="s1">,</span> DISCLOSE ALL THE RISKS AND OTHER ASPECTS OF TRADING OFF-EXCHANGE FOREIGN CURRENCY <br> <br> TRANSACTIONS WITH A FUTURES COMMISSION MERCHANT OR RETAIL FOREIGN EXCHANGE DEALER. <br> <br> PERFORMANCE OF INTERACTIVE BROKERS RETAIL CUSTOMER FOREX ACCOUNTS FOR THE PAST FOUR CALENDAR QUARTERS: <br> <br> The table below sets forth the percentage of non-discretionary retail forex customer accounts maintained by Interactive Brokers LLC that were profitable and unprofitable for the past four calendar quarters. The accounts were identified and these statistics were calculated according to the definitions and interpretations set forth by the CFTC and NFA1. <br> <br> TIME PERIOD/NUMBER OF ACCOUNTS/PERCENTAGE OF PROFITABLE ACCOUNTS/PERCENTAGE OF UNPROFITABLE ACCOUNTS <br> Q4 2015 32<span class="s1">,</span>956 44.94% 55.06% <br> Q3 2015 32<span class="s1">,</span>455 44.60% 55.40% <br> Q2 2015 31<span class="s1">,</span>732 46.48% 53.525% <br> Q1 2015 30<span class="s1">,</span>398 45.45% 54.55% <br> <br> PAST PERFORMANCE IS NOT NECESSARILY INDICATIVE OF FUTURE RESULTS. <br> <br> FURTHER INFORMATION PROVIDED BY INTERACTIVE BROKERS: <br> <br> A. Overview: Interactive Brokers Multi-Currency enabled accounts allow IB Customers to trade investment products denominated in different currencies using a single IB account denominated in a "base" currency of the customer's choosing. IB Customers can also use their Multi-Currency enabled accounts to conduct foreign exchange transactions in order to manage credits or debits generated by foreign securities<span class="s1">,</span> options or futures trading<span class="s1">,</span> to convert such credits or debits back into the Customer's base currency<span class="s1">,</span> or to hedge or speculate. IB foreign exchange transactions offered to retail customers are forex spot transactions. <br> <br> B. Nature of Your Account and Whether SIPC Covers Foreign Currency: Foreign currency trading at Interactive Brokers takes place in a securities account. Your IB securities account is governed by rules of the U.S. Securities and Exchange Commission <span class="s1">(</span>"SEC"<span class="s1">)</span> and the Financial Industry Regulatory Authority. In addition<span class="s1">,</span> IB observes the rules of the National Futures Association in connection with foreign currency trading. <br> Interactive Brokers LLC is a member of the Securities Investor Protection Corporation <span class="s1">(</span>"SIPC"<span class="s1">)</span>. SIPC protects cash and securities held with Interactive Brokers as specified in the Securities Investor Protection Act. SIPC protects cash<span class="s1">,</span> including US dollars and foreign currency<span class="s1">,</span> to the extent that the cash was deposited with Interactive Brokers for the purpose of purchasing securities. Whether foreign currency in your IB account would be protected by SIPC would depend in part on whether the cash was considered to be deposited with Interactive Brokers for the purpose of purchasing securities. Interactive Brokers expects that at least one factor in deciding this would be whether and the extent to which the customer engages in securities trading in addition to or in conjunction with forex trading<span class="s1">,</span> but<span class="s1">,</span> as discussed in section 3 above<span class="s1">,</span> funds deposited specifically for forex trading have no regulatory protections under NFA rules or CFTC regulations. For further information<span class="s1">,</span> you must contact your own legal counsel or SIPC. <br> Customer money held in the securities account is subject to Securities Exchange Act Rule 15c3-3 governing customer reserve requirements. Although relevant regulations only require computation of the 15c3-3 reserve requirement and associated segregation of customer funds to be performed weekly<span class="s1">,</span> IB performs such calculations and segregation on a daily basis. <br> <br> C. General Risk: Customer understands and acknowledges that buying and selling securities<span class="s1">,</span> options<span class="s1">,</span> futures and other financial products that are denominated in foreign currencies or traded on foreign markets is inherently risky and requires substantial knowledge and expertise. Customers applying for Interactive Brokers Multi-Currency enabled accounts represent that they are aware of and understand the risks involved in trading foreign securities<span class="s1">,</span> options<span class="s1">,</span> futures and currencies and that they have sufficient financial resources to bear such risks. <br> <br> D. Customer Responsibility for Investment Decisions: Customer acknowledges that IB representatives are not authorized to provide investment<span class="s1">,</span> trading or tax advice and therefore will not provide advice or guidance on trading or hedging strategies in the Multi-Currency enabled account. Customers must evaluate carefully whether any particular transaction is appropriate for them in light of their investment experience<span class="s1">,</span> financial objectives and needs<span class="s1">,</span> financial resources<span class="s1">,</span> and other relevant circumstances and whether they have the operational resources in place to monitor the associated risks and contractual obligations over the term of the transaction. In making these assessments<span class="s1">,</span> IB strongly recommends that Customers obtain independent business<span class="s1">,</span> legal<span class="s1">,</span> and accounting advice before entering into any transactions. <br> <br> E. Exchange Rate Risk: Exchange rates between foreign currencies can change rapidly due to a wide range of economic<span class="s1">,</span> political and other conditions<span class="s1">,</span> exposing the Customer to risk of exchange rate losses in addition to the inherent risk of loss from trading the underlying financial product. If a Customer deposits funds in a currency to trade products denominated in a different currency<span class="s1">,</span> Customer's gains or losses on the underlying investment therefore may be affected by changes in the exchange rate between the currencies. If Customer is trading on margin<span class="s1">,</span> the impact of currency fluctuation on Customer's gains or losses may be even greater. <br> <br> F. Currency Fluctuation:When Customer uses the foreign exchange facility provided by IB to purchase or sell foreign currency<span class="s1">,</span> fluctuation in currency exchange rates between the foreign currency and the base currency could cause substantial losses to the Customer<span class="s1">,</span> including losses when the Customer converts the foreign currency back into the base currency. <br> <br> G. Nature of Foreign Currency Exchange Transactions Between Customer and IB: When Customer enters into a foreign exchange transaction with IB<span class="s1">,</span> IB<span class="s1">,</span> as the counterparty to Customer's trade<span class="s1">,</span> may effectuate that transaction by entering into an offsetting transaction with one of IB's affiliates<span class="s1">,</span> with another customer that enters quotes into IB's system<span class="s1">,</span> or with a third party bank <span class="s1">(</span>IB's "Forex Providers"<span class="s1">)</span>. In such transactions<span class="s1">,</span> the Forex Provider is not acting in the capacity of a financial adviser or fiduciary to Customer or to IB<span class="s1">,</span> but rather<span class="s1">,</span> is taking the other side of IB's offsetting trade in an arm's length contractual transaction. Customer should be aware that the Forex Provider may from time to time have substantial positions in<span class="s1">,</span> and may make a market in or otherwise buy or sell instruments similar or economically related to<span class="s1">,</span> foreign currency transactions entered into by Customer. IB's Forex Providers may also undertake proprietary trading activities<span class="s1">,</span> including hedging transactions related to the initiation or termination of foreign exchange transactions with IB<span class="s1">,</span> which may adversely affect the market price or other factors underlying the foreign currency transaction entered into by Customer and consequently<span class="s1">,</span> the value of such transaction. <br> <br> H. Prices on the IB Forex Platforms:The prices quoted by IB to Customers for foreign exchange transactions on IB's IdealPro platform will be determined based on Forex Provider quotes and are not determined by a competitive auction as on an exchange market. Prices quoted by IB for foreign currency exchange transactions therefore may not be the most competitive prices available. For purposes of maintaining adequate scale and competitive spreads<span class="s1">,</span> a minimum size is imposed on all IdealPro orders <span class="s1">(</span>USD $25<span class="s1">,</span>000 as of December 2015 but this is subject to change at any time<span class="s1">)</span>. Orders below the minimum size are considered odd lots and limit prices for these odd lot-sized orders are not displayed through IdealPro. While odd lot marketable orders are not likely to be executed at the interbank spreads afforded to IdealPro orders<span class="s1">,</span> they will generally be executed at prices only slightly inferior <span class="s1">(</span>1-3 ticks<span class="s1">)</span>. IB will charge transaction fees as specified by IB for foreign currency exchange transactions. IB's Forex Providers will try to earn a spread profit on transactions with IB <span class="s1">(</span>differential between the bid and ask prices quoted for various currencies<span class="s1">)</span>. <br> <br> I. Price Slippage<span class="s1">;</span> Order Cancellation and Adjustment: Prices quoted on IB's system generally reflect the prices at which IB's Forex Providers are willing to trade. Prices quoted on IB's system reflect changing market conditions and therefore quotes can and do change rapidly. As such<span class="s1">,</span> when a Customer order is received and processed by IB's system<span class="s1">,</span> the quote on IB's platform may be different from the quote displayed when the order was sent by Customer. This change in price is commonly referred to as "slippage". IB generally will not execute a Customer order at a certain price unless IB is able to trade at that price against one of IB's Forex Providers. <br> If Customer sends an order for a forex transaction to IB's system but Customer's requested price is no longer available and therefore the order is non-marketable<span class="s1">,</span> IB will not execute the order then but will place it in IB's limit order book in accordance with Customer's time-in-force instructions. Other customers can then trade against this order when it becomes the National Best Bid and Offer <span class="s1">(</span>"NBBO"<span class="s1">)</span> or IB may execute the order if it becomes marketable based on prices received from IB's Forex Providers. <br> If Customer sends an order for a forex transaction to IB's system and the current price is more favorable for Customer than what Customer requested in the order<span class="s1">,</span> the order will generally be executed at the available better price. <br> Although IB attempts to obtain the best price for Customer orders on forex transactions<span class="s1">,</span> because of the inherent possibility of transmission delays between and among <br> Customers<span class="s1">,</span> IB and Forex Providers<span class="s1">,</span> or other technical issues<span class="s1">,</span> execution prices may be worse than the quotes displayed on the IB platform. <br> To execute your order<span class="s1">,</span> Interactive Brokers engages in back-to-back transactions with one or more counterparties. These counterparties on occasion may cancel or adjust forex trades with us in the event of market or technical problems. In these cases we may have to cancel or adjust forex trades that you have executed. <br> <br> J. Other Risks: There are other risks that relate to trading foreign investment products and trading foreign currencies that cannot be described in detail in this document. Generally<span class="s1">,</span> however<span class="s1">,</span> foreign securities<span class="s1">,</span> options<span class="s1">,</span> futures and currency transactions involve exposure to a combination of the following risk factors: market risk<span class="s1">,</span> credit risk<span class="s1">,</span> settlement risk<span class="s1">,</span> liquidity risk<span class="s1">,</span> operational risk and legal risk. For example<span class="s1">,</span> there can be serious market disruptions if economic or political or other unforeseen events locally or overseas affect the market. Also<span class="s1">,</span> the settlement date of foreign exchange trades can vary due to time zone differences and bank holidays. When trading across foreign exchange markets<span class="s1">,</span> this may necessitate borrowing funds to settle foreign exchange trades. The interest rate on borrowed funds must be considered when computing the cost of trades across multiple markets. In addition to these types of risk there may be other factors such as accounting and tax treatment issues that Customers should consider. <br> <span class="s1">(</span>1<span class="s1">)</span>Information regarding the performance of Interactive Brokers retail forex customers for the past 5 years is available upon request. <br> Customer acknowledges that it has received and understood the Interactive Brokers Risk Disclosure Statement for Forex Trading And Multi-Currency Accounts.</p>
                            <p class="p1">Commodity Futures Trading Commission Risk Disclosure Statement</p>
                            <p class="p1">Interactive Brokers provides you the following disclosure document in the event that you and your advisor choose to trade futures or options on futures in your Interactive Brokers account. Please read and sign the following document.</p>
                            <p class="p1">Risk Disclosure Statement for Futures and Options This brief statement does not disclose all of the risks and other significant aspects of trading in futures and options. In light of the risks<span class="s1">,</span> you should undertake such transactions only if you understand the nature of the contracts <span class="s1">(</span>and contractual relationships<span class="s1">)</span> into which you are entering and the extent of your exposure to risk. Trading in futures and options is not suitable for many members of the public. You should carefully consider whether trading is appropriate for you in light of your experience<span class="s1">,</span> objectives<span class="s1">,</span> financial resources andother relevant circumstances.</p>
                            <p class="p1">Futures<br> 1. Effect of "Leverage" or "Gearing" <br> Transactions in futures carry a high degree of risk. The amount of initial margin is small relative to the value of the futures contract so that transactions are `leveraged' or `geared'. A relatively small market movement will have a proportionately larger impact on the funds you have deposited or will have to deposit: this may work against you as well as for you. You may sustain a total loss of initial margin funds and any additional funds deposited with the firm to maintain your position. If the market moves against your position or market levels are increased<span class="s1">,</span> you may be called upon to pay substantial additional funds on short notice to maintain your position. If you fail to comply with a request for additional funds within the time prescribed<span class="s1">,</span> your position may be liquidated at a loss and you will be liable for any resulting deficit.</p>
                            <p class="p1">2. Risk-reducing orders or strategies <br> The placing of certain orders <span class="s1">(</span>e.g. `stop-loss' orders<span class="s1">,</span> where permitted under local law<span class="s1">,</span> or `stop-limit' orders<span class="s1">)</span> which are intended to limit losses to certain amount may not be effective because market conditions may make it impossible to execute such orders. Strategies using combinations of positions<span class="s1">,</span> such as `spread' and `straddle' positions may be as risky as taking simple `long' or `short' positions.</p>
                            <p class="p1">Options<br> 3. Variable degree of risk <br> Transactions in options carry a high degree of risk. Purchasers and sellers of options should familiarize themselves with the type of option <span class="s1">(</span>i.e. put or call<span class="s1">)</span> which they contemplate trading and the associated risks. You should calculate the extent to which the value of the options must increase for your position to become profitable<span class="s1">,</span> taking into account the premium and all transaction costs. The purchaser of options may offset or exercise the options or allow the options to expire. The exercise of an option results either in a cash settlement or in the purchaser acquiring or delivering the underlying interest. If the option is on a future<span class="s1">,</span> the purchaser will acquire a futures position with associated liabilities for margin <span class="s1">(</span>see the section on Futures above<span class="s1">)</span>. If the purchased options expire worthless<span class="s1">,</span> you will suffer a total loss of your investment which will consist of the option premium plus transaction costs. If you are contemplating purchasing deep-out-of-the-money options<span class="s1">,</span> you should be aware that the chance of such options becoming profitable ordinarily is remote. <br> Selling <span class="s1">(</span>`writing' or `granting'<span class="s1">)</span> an option generally entails considerably greater risk than purchasing options. Although the premium received by the seller is fixed<span class="s1">,</span> the seller may sustain a loss well in excess of that amount. The seller will be liable for additional margin to maintain the position if the market moves unfavorably. The seller will also be exposed to the risk of the purchaser exercising the option and the seller will be obligated to either settle the option in cash or to acquire or deliver the underlying interest. If the option is on a future<span class="s1">,</span> the seller will acquire a position in a future with associated liabilities for margin <span class="s1">(</span>see the section on Futures above<span class="s1">)</span>. If the option is `covered' by the seller holding a corresponding position in the underlying interest or a future or another option<span class="s1">,</span> the risk may be reduced. If the option is not covered<span class="s1">,</span> the risk of loss can be unlimited. <br> Certain exchanges in some jurisdictions permit deferred payment of the option premium<span class="s1">,</span> exposing the purchaser to liability for margin payments not exceeding the amount of the premium. The purchaser is still subject to the risk of losing the premium and transaction costs. When the option is exercised expires<span class="s1">,</span> the purchaser is responsible for any unpaid premium outstanding at that time. <br> Additional risks common to futures and options.</p>
                            <p class="p1">4. Terms and conditions of contracts&nbsp;</p>
                            <p class="p1">You should ask the firm with which you deal about the terms and conditions of the specific futures or options which you are trading and associated obligations <span class="s1">(</span>e.g. the circumstances under which you may become obligated to make or take delivery of the underlying interest of a futures contract and<span class="s1">,</span> in respect of options<span class="s1">,</span> expiration dates and restrictions on the time for exercise<span class="s1">)</span>. Under certain circumstances the specifications of outstanding contracts <span class="s1">(</span>including the exercise price of an option<span class="s1">)</span> may be modified by the exchange or clearing house to reflect changes in the underlying interest.</p>
                            <p class="p2">&nbsp;</p>
                            <p class="p1">5. Suspension or restriction of trading and pricing relationships <br> Market conditions <span class="s1">(</span>e.g. illiquidity<span class="s1">)</span> and/or the operation of the rules of certain markets <span class="s1">(</span>e.g. the suspension of trading in any contract or contract month because of price limits or "circuit breakers"<span class="s1">)</span> may increase the risk of loss by making it difficult or impossible to effect transactions or liquidate/offset positions. If you have sold options<span class="s1">,</span> this may increase the risk of loss.</p>
                            <p class="p1"><br> Further<span class="s1">,</span> normal pricing relationships between the underlying interest and the future<span class="s1">,</span> and the underlying interest and the option may not exist. This can occur when<span class="s1">,</span> for example<span class="s1">,</span> the futures contract underlying the option is subject to price limits while the option is not. The absence of an underlying reference price may make it difficult to judge "fair" value.</p>
                            <p class="p1">6. Deposited cash and property <br> You should familiarize yourself with the protections accorded money or other property you deposit for domestic and foreign transactions<span class="s1">,</span> particularly in the event of a firm insolvency or bankruptcy. The extent to which you may recover your money or property may be governed by specific legislation or local rules. In some jurisdictions<span class="s1">,</span> property which had been specifically identifiable as your own will be pro-rated in the same manner as cash for purposes or distribution in the event of a shortfall.</p>
                            <p class="p1">7. Commission and other charges <br> Before you begin to trade<span class="s1">,</span> you should obtain a clear explanation of all commission<span class="s1">,</span> fees and other charges for which you will be liable. These charges will affect your net profit <span class="s1">(</span>if any<span class="s1">)</span> or increase your loss.</p>
                            <p class="p1">8. Transactions in other jurisdictions <br> Transactions on markets in other jurisdictions<span class="s1">,</span> including markets formally linked to a domestic market<span class="s1">,</span> may expose you to additional risk. Such markets may be subject to regulation which may offer different or diminished investor protection. Before you trade you should inquire about any rules relevant to your particular transactions. Your local regulatory authority will be unable to compel the enforcement of the rules of regulatory authorities or markets in other jurisdictions where your transactions have been effected. You should ask the firm with which you deal for details about the types of redress available in both your home jurisdiction and other relevant jurisdictions before you start to trade.</p>
                            <p class="p1">9. Currency risks <br> The profit or loss in transactions in foreign currency-denominated contracts <span class="s1">(</span>whether they are traded in your own or another jurisdiction<span class="s1">)</span> will be affected by fluctuations in currency rates where there is a need to convert from the currency denomination of the contract to another currency.</p>
                            <p class="p1">10. Trading facilities <br> Most open-outcry and electronic trading facilities are supported by computer-based component systems for the order-routing<span class="s1">,</span> execution<span class="s1">,</span> matching<span class="s1">,</span> registration or clearing of trades. As with all facilities and systems<span class="s1">,</span> they are vulnerable to temporary disruption or failure. Your ability to recover certain losses may be subject to limits on liability imposed by the system provider<span class="s1">,</span> the market<span class="s1">,</span> the clearing house and/or member firms. Such limits may vary: you should ask the firm with which you deal for details in this respect.</p>
                            <p class="p1">11. Electronic trading <br> Trading on an electronic trading system may differ not only from trading in an open-outcry market but also from trading on other electronic trading systems. If you undertake transactions on an electronic trading system<span class="s1">,</span> you will be exposed to risks associated with the system including the failure of hardware and software. The result of any system failure may be that your order is either not executed according to your instructions or is not executed at all.</p>
                            <p>&nbsp;</p>
                            <p class="p1">12. Off-exchange transactions <br> In some jurisdictions<span class="s1">,</span> and only then in restricted circumstances<span class="s1">,</span> firms are permitted to effect off-exchange transactions. The firm with which you deal may be acting as your counterparty to the transaction. It may be difficult or impossible to liquidate an existing position<span class="s1">,</span> to assess the value<span class="s1">,</span> to determine a fair price or to assess the exposure to risk. For these reasons<span class="s1">,</span> these transactions may involve increased risks. Off-exchange transactions may be less regulated or subject to a separate regulatory regime. Before you undertake such transactions<span class="s1">,</span> you should familiarize yourself with applicable rules and attendant risks.</p></div>
                        <div class="form-group-control form-inline ios-style" pattern="/^1$/" required="">
                            <div class="group">
                                <input type="radio" value="1" v-model="agreement_5" v-validate="{required:true}"  name="agreement_5">本人同意
                            </div>
                            <div class="group">
                                <input type="radio" value="0" v-model="agreement_5" v-validate="{required:true}"  name="agreement_5">本人不同意
                            </div>
                        </div>
                        <div v-if="errors.has('agreement_5')" class="form-submit-error a-flipinX">{{ errors.first('agreement_5') }}</div>
                    </div>
                    <div class="agreement-group opened">
                        <a href="javascript:;" class="title">通知和确认清算安排</a>
                        <div class="content"><p class="p1">NOTICE AND ACKNOWLEDGEMENT OF CLEARING ARRANGEMENT</p>
                            <p class="p1">1. This Notice applies to Customers who have been introduced to Interactive Brokers <span class="s1">(</span>"Interactive"<span class="s1">)</span> by TIGER HOLDINGS GROUP LIMITED <span class="s1">(</span>"Introducing Broker"<span class="s1">)</span>. Interactive Brokers and Introducing Broker are parties to a Fully Disclosed Clearing Agreement pursuant to which Interactive performs certain services with respect to your account and other accounts introduced to Interactive by the Introducing Broker.</p>
                            <p class="p1">2. The terms and conditions of the Interactive Brokers Customer Agreement and the Interactive Brokers Margin Agreement apply to your account and are incorporated herein by reference. TO THE EXTENT THAT THIS NOTICE DIFFERS FROM OR SUPERCEDES SPECIFIC PROVISIONS OF THE INTERACTIVE BROKERS CUSTOMER AGREEMENT OR MARGIN AGREEMENT<span class="s1">,</span> THIS NOTICE CONTROLS AND IS BINDING ON YOUR ACCOUNT.</p>
                            <p class="p1">3. Responsibilities of Interactive Brokers: Interactive will be responsible for the following services regarding Customer accounts: <br> a. Obtaining and verifying account information and documentation and opening and closing Customer accounts. <br> b. Receiving<span class="s1">,</span> segregating<span class="s1">,</span> safeguarding and delivering Customer funds<span class="s1">,</span> securities<span class="s1">,</span> and other property. <br> c. Extending credit to Customer accounts<span class="s1">,</span> collecting margin from the accounts<span class="s1">,</span> and determining and enforcing credit or margin limits applicable to the accounts. <br> d. Receiving orders from you or from your Introducing Broker for your account and executing such orders and clearing executed transactions. <br> e. Providing confirmations and statements to Customers. <br> f. Accepting instructions regarding voluntary corporate actions <span class="s1">(</span>e.g.<span class="s1">,</span> tender or exchange offers<span class="s1">)</span> and accepting instructions with respect to options and securities rights.</p>
                            <p class="p1">4. Responsibilities of Introducing Broker: Introducing Broker will be responsible for the following services regarding Customer accounts: <br> a. Introducing Customer accounts to Interactive Brokers and providing Customers with instructions on how to apply for Interactive Brokers accounts. <br> b. Providing all customer service and technical support and responding to Customer complaints<span class="s1">,</span> inquiries and requests. <br> c. Accepting Customer orders and transmitting them to Interactive for execution <span class="s1">(</span>you may also submit orders directly to Interactive through Interactive's order entry software<span class="s1">)</span>. <br> d. Providing notice to Customers of commission rates and fees.</p>
                            <p class="p1">5. Commissions and Fees: Introducing Broker is responsible for notifying Customers of all commissions and fees applicable to Customer accounts. Interactive will deduct applicable commissions and fees from Customer accounts. Commission and fee payments owed by Customers may be shared and allocated between Introducing Broker and Interactive as Introducing Broker and Interactive agree from time to time.</p>
                            <p class="p1">6. Customer Service: Introducing Broker is solely responsible for providing all customer service and technical support for your account and for responding to your questions or inquiries concerning your account<span class="s1">,</span> your orders and your trading. You should not contact IB customer support directly<span class="s1">,</span> and instead you must contact the Introducing Broker. All disputes and issues concerning Interactive's performance of its responsibilities for Customer accounts <span class="s1">(</span>such as trading issues<span class="s1">,</span> execution questions<span class="s1">,</span> margin and credit issues<span class="s1">,</span> etc.<span class="s1">)</span> will be forwarded to Interactive by the Introducing Broker and Interactive will communicate the resolution to the Introducing Broker <span class="s1">(</span>or in exceptional cases<span class="s1">,</span> the Customer<span class="s1">)</span>. INTRODUCING BROKER SHALL HAVE NO AUTHORITY TO BIND INTERACTIVE OR TO ENTER INTO ANY AGREEMENT<span class="s1">,</span> UNDERSTANDING OR COMMITMENT GIVING RISE TO ANY LIABILITY OR OBLIGATION OF INTERACTIVE.</p>
                            <p class="p1">7. Orders: Interactive Brokers is authorized to accept orders from you or from your Introducing Broker for your account. Interactive will not contact you to verify or confirm<span class="s1">,</span> prior to execution<span class="s1">,</span> orders entered for your account by your Introducing Broker. ALL DISPUTES REGARDING ORDERS ENTERED BY YOUR INTRODUCING BROKER ARE BETWEEN YOU AND THE INTRODUCING BROKER. ERRORS IN COMMUNICATIONS OR TRANSMISSIONS OF ORDERS FROM YOUR INTRODUCING BROKER TO INTERACTIVE ARE THE SOLE RESPONSIBILITY OF YOUR INTRODUCING BROKER.</p>
                            <p class="p1">8. Account Information: Introducing Broker is responsible for providing all customer and technical support regarding your account and is therefore authorized to view all information regarding your account. INTRODUCING BROKER'S MISUSE OR DISCLOSURE OF INFORMATION REGARDING YOUR ACCOUNT IS SOLELY THE RESPONSIBILITY OF INTRODUCING BROKER AND INTERACTIVE SHALL BEAR NO LIABILITY FOR ANY CLAIMS ARISING FROM INTRODUCING BROKER'S ACCESS TO YOUR ACCOUNT INFORMATION.</p>
                            <p class="p1">9. No Investment or Tax Advice: You acknowledge that neither Interactive nor its employees or representatives provide any investment<span class="s1">,</span> tax or trading advice<span class="s1">;</span> nor do they solicit orders. You further acknowledge that neither Interactive nor its employees or representatives advise you or your Introducing Broker on any matters pertaining to the suitability of any order<span class="s1">;</span> offer any opinion<span class="s1">,</span> judgment or other type of information pertaining to the nature<span class="s1">,</span> value<span class="s1">,</span> potential or suitability of any particular investment<span class="s1">;</span> or review the appropriateness of investment advice or transactions entered by you or by Introducing Broker on your behalf.</p>
                            <p>&nbsp;</p>
                            <p class="p1">10. Interactive does not control<span class="s1">,</span> audit or supervise the activities of Introducing Broker or its registered representatives. Neither Introducing Broker nor any of its officers<span class="s1">,</span> directors<span class="s1">,</span> employees or representatives are employees or agents of Interactive<span class="s1">,</span> nor shall they hold themselves out as such.</p></div>
                        <div class="form-group-control form-inline ios-style" pattern="/^1$/" required="">
                        <div class="group">
                            <input type="radio" value="1" v-model="agreement_6" v-validate="{required:true}" name="agreement_6">本人同意</div>
                            <div class="group"><input value="0" v-model="agreement_6" v-validate="{required:true}" type="radio" name="agreement_6">本人不同意</div>
                        </div>
                        <div v-if="errors.has('agreement_6')" class="form-submit-error a-flipinX">{{ errors.first('agreement_6') }}</div>
                    </div>
                    <div class="agreement-group opened">
                        <a href="javascript:;" class="title">期权交易风险告知和免责声明</a>
                        <div class="content"><p class="p1" style="text-align: center;">期权交易风险披露</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">（一）期权交易风险告知</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">1.期权又称为选择权，是一种衍生金融工具。期权是一种振幅极大的交易产品，一个交易日中发生100%以上的涨幅或者50%以上的跌幅都属于非常普遍的现象。因此，期权对于没有相关经验的投资者来说是可能会带来高收益，但也伴随着比较高的风险。投资者可能會遭受重大损失，甚至有可能亏损全部本金。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">2.期权的交易规则较为复杂，请确认您已充分掌握期权交易的规则，并了解期权价格与股票价格走势之间的联系后评估可以是否可以承担投资期权带来的风险，然后再向开始进入期权交易。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">（二）风险免责</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">3. 所有投资都存在风险。任何一支证券或金融产品的历史数据都不能保证其未来的表现及回报。虽然投资多样化可以帮助分散风险，但是并不能在市场低迷时确保您获益或防止您损失。投资证券或金融产品总会存在潜在的亏损可能。您在进行投资前需考虑自身的投资目标及风险承受能力。当您使用本产品时，即表示您已阅读、了解并接受本声明内所有内容，并表明您已完全了解可能存在的风险并同意承担使用本产品存在的全部风险。您应明确使用本产品并不能完全规避投资风险，老虎证券不对您投资期权利益的损失和风险承担任何责任。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">4. 老虎证券及其关联公司将竭力确保所提供信息的真实性、充分性、可靠性和准确性，但不能保证其绝对可靠和准确，所有信息、数据、资料仅作为参考。您须谨慎判断本产品中的行情价格、图表、评论和购买或者其他信息的准确性。因任何内容不准确或遗漏或您的主观原因引起的损失，老虎证券不承担任何责任。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">5. 在适用法律允许的最大范围内，对因使用或不能使用本产品所产生的损失及风险，包括但不限于直接或间接的个人损害、商业赢利的丧失、贸易中断、商业信息的丢失或任何其它经济损失， 老虎证券不承担任何责任。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">（三）因用户过失或违约免责</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">6. 老虎证券有权随时修改或变更本声明，修改或变更后的条款应于公示时即时生效。本声明修改或变更后，您继续使用本产品的，都将视为您已经阅读、了解并接受修改或变更后的声明条款。如您以未阅读、不了解、不接受修改或变更后的声明条款为由主张损失赔偿的，老虎证券不承担任何责任。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">7. 您须确认已知悉本产品的功能及为实现产品功能所进行的必要操作，根据自身需求自愿选择使用老虎产品及相关服务。如因您使用老虎产品及相关服务时因您的个人疏忽或操作失误造成损失的，老虎证券不承担任何责任。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">8. 如您为任何非法目的或以任何非法方式使用本产品，利用老虎证券提供的服务从事任何违法或侵害他人权益行为，给您和第三人造成损失的，老虎证券不承担任何赔偿责任。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">9. 本产品所使用的软件或程序、产品上所有内容，包括但不限于著作、图片、档案、资讯、资料、产品架构、产品设计，均由老虎证券或其他权利人依法拥有其知识产权，包括但不限于商标权、专利权、著作权、营业秘密与专有技术等。如您未经老虎证券或其他权利人事前书面同意，擅自使用、修改、重制、公开播送、改作、散布、发行、公开发表、进行还原工程、解编或反向编译本产品给您和第三人造成损失的，老虎证券不承担任何赔偿责任，且有权要求您承担侵犯知识产权之责任。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">10. 在使用本产品过程中，如因您个人原因出现账户密码、个人信息、交易资料泄露或您的身份被仿冒等情形，给您造成损失的，老虎证券不承担任何赔偿责任。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">（四）客观免责</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">11. 本产品经过详细、严密的测试，但不能保证与所有的软硬件系统完全兼容，不能保证本产品完全没有错误。如果出现不兼容及软件错误的情况，您可拨打老虎证券客服电话（4000–588–588）将情况报告老虎证券，获得技术支持，但无法获得老虎证券的经济赔偿。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">12.对于因电信系统或互联网网络故障、计算机故障或病毒、信息损坏或丢失、计算机系统问题或其它任何不可抗力原因（如战争、通讯故障、自然灾害、罢工、政府行为）而产生的损失，老虎证券不承担任何责任。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">13.本产品所提供的服务可能因互联网数据传输故障、中断、延迟等客观因素出现中断、故障等现象，存在本产品功能无法实现之虞。此情形下，如您因迟延使用或无法使用本产品所提供的服务而遭受损失的，老虎证券不承担赔偿责任。建议您使用本产品时也采取合理、有效的防护措施。</p>
                            <p class="p1">&nbsp;</p>
                            <p class="p1">14.根据公司经营之需要，老虎证券将会在本产品中刊登、转载合作公司提供的新闻、资讯等内容，刊登、转载时均会注明内容提供者。基于尊重内容提供者的知识产权，老虎证券对其提供的内容不作任何实质性审查或修改，不保证该内容的真实性，请您自行判断。若您认为某些内容涉及侵权或不实，请自行向该内容的提供者反映意见。</p></div>
                        <div class="form-group-control form-inline ios-style" pattern="/^1$/" required="">
                            <div class="group">
                                <input value="1" v-model="agreement_7" v-validate="{required:true}" type="radio" name="agreement_7">本人同意
                            </div>
                            <div class="group">
                                <input type="radio" value="0" v-model="agreement_7" v-validate="{required:true}" name="agreement_7">本人不同意
                            </div>
                        </div>
                        <div v-if="errors.has('agreement_7')" class="form-submit-error a-flipinX">{{ errors.first('agreement_7') }}</div>
                    </div>
                    <div class="agreement-group opened">
                        <a href="javascript:;" class="title">Interactive Brokers Arbitration Agreement</a>
                        <div class="content"><p>Any controversy or claim between Interactive Brokers LLC ("IB") and the undersigned ("Customer") arising out of or relating to Customer's Account with IB, to transactions between IB and Customer, to the Customer Agreement with IB or any other agreement between IB and Customer, or to the breach of any such transaction or agreement shall, except as provided below, be resolved by arbitration before a forum chosen in accordance with the procedure set out below. If, by reason of any applicable statute, regulation, exchange rule or otherwise, Customer's advance agreement to submit a controversy to arbitration would not be enforceable by IB, this provision shall not permit Customer to enforce IB's advance agreement to submit to arbitration. Any award rendered in any arbitration conducted pursuant to this agreement shall be final, binding and enforceable in accordance with the laws of the State of Connecticut and judgment may be entered on any such award by any court having jurisdiction thereof.</p>
                            <p>At such time as Customer notifies IB that Customer intends to submit a controversy to arbitration, or at such time as IB notifies Customer that IB intends to submit a controversy to arbitration, Customer will have the opportunity to choose a forum from a list of qualified forums provided by IB. A "qualified forum" is an organization whose procedures for conducting arbitrations meet Acceptable Practices established by the Commodity Futures Trading Commission ("CFTC").</p>
                            <p>As required by CFTC Rule 166.5, IB will pay any incremental fees which may be assessed by a qualified forum for provision of a mixed arbitration panel, unless the arbitrators hearing the controversy determine that Customer has acted in bad faith in initiating or conducting the arbitration. A "mixed arbitration panel" is an arbitration panel composed of one or more persons, a majority of whom are not members or associated with a member, or an employee of the designated contract market (upon which the transaction giving rise to the dispute was executed or could have been executed) and who are not otherwise associated with the designated contract market.</p>
                            <p>In connection with this Arbitration Agreement, IB is required to furnish to Customer the following statement, pursuant to Rule 166.5 of the CFTC (for the purposes of the following, "you" or "your" means IB's Customer):</p>
                            <p>THREE FORUMS EXIST FOR THE RESOLUTION OF COMMODITY DISPUTES: CIVIL COURT LITIGATION, REPARATIONS AT THE COMMODITY FUTURES TRADING COMMISSION ("CFTC"), AND ARBITRATION CONDUCTED BY A SELF-REGULATORY OR OTHER PRIVATE ORGANIZATION.</p>
                            <p>THE CFTC RECOGNIZES THAT THE OPPORTUNITY TO SETTLE DISPUTES BY ARBITRATION MAY IN SOME CASES PROVIDE MANY BENEFITS TO CUSTOMERS, INCLUDING THE ABILITY TO OBTAIN AN EXPEDITIOUS AND FINAL RESOLUTION OF DISPUTES WITHOUT INCURRING SUBSTANTIAL COSTS. THE CFTC REQUIRES, HOWEVER, THAT EACH CUSTOMER INDIVIDUALLY EXAMINE THE RELATIVE MERITS OF ARBITRATION AND THAT YOUR CONSENT TO THIS ARBITRATION AGREEMENT BE VOLUNTARY.</p>
                            <p>BY SIGNING THIS AGREEMENT, YOU: (1) MAY BE WAIVING YOUR RIGHT TO SUE IN A COURT OF LAW; AND (2) ARE AGREEING TO BE BOUND BY ARBITRATION OF ANY CLAIMS OR COUNTERCLAIMS WHICH YOU OR IB MAY SUBMIT TO ARBITRATION UNDER THIS AGREEMENT. YOU ARE NOT, HOWEVER, WAIVING YOUR RIGHT TO ELECT INSTEAD TO PETITION THE CFTC TO INSTITUTE REPARATIONS PROCEEDINGS UNDER SECTION 14 OF THE COMMODITY EXCHANGE ACT WITH RESPECT TO ANY DISPUTE WHICH MAY BE ARBITRATED PURSUANT TO THIS AGREEMENT. IN THE EVENT A DISPUTE ARISES, YOU WILL BE NOTIFIED IF IB INTENDS TO SUBMIT THE DISPUTE TO ARBITRATION. IF YOU BELIEVE A VIOLATION OF THE COMMODITY EXCHANGE ACT IS INVOLVED AND IF YOU PREFER TO REQUEST A SECTION 14 "REPARATIONS" PROCEEDING BEFORE THE CFTC, YOU WILL HAVE 45 DAYS FROM THE DATE OF SUCH NOTICE IN WHICH TO MAKE THAT ELECTION.</p></div>
                        <div class="form-group-control form-inline ios-style" pattern="/^1$/" required=""><div class="group">
                            <input type="radio" value="1" v-model="agreement_8" v-validate="{required:true}" name="agreement_8">本人同意</div>
                            <div class="group">
                                <input type="radio" value="0" v-model="agreement_8" v-validate="{required:true}" name="agreement_8">本人不同意
                            </div>
                        </div>
                    </div>
                    <div class="agreement-group">
                        <div class="w-8ben-form">
                            <div class="contents">
                                <h2>W-8BEN Substitute<br>在美预扣税和报税受益人<br>外籍身份证明（个人）</h2>
                                <p>*W8表格供个人使用。实体须使用 
                                    <a href="/static/img/w-8ben.jpg" target="_blank">W-8BEN-E</a> 
                                    表格。<br>有关W-8BEN表格的信息以及单独说明参见www.irs.gov/formw8ben<br>请将此表格交给代扣税代理或纳税方。请勿发送至国税局。
                                </p>
                                <p>
                                    如果属于以下情况，请勿使用此表格，而使用其他表格：<br>1.非个人，请使用W-8BEN-E表格<br>2.美国公民或其他在美人士，包括外籍居住者，请使用W-9表格<br>3.宣称收入在与美国的贸易或业务行为相关的收益所有人（除个人服务），请使用W-8ECI表格<br>4.因在美国提供个人服务而获取 补偿的受益所有人，请使用8233或者W-4表格<br>5.担任中介的人，请使用W-8IMY表格
                                </p>
                                <h3>第一部分：受益方身份</h3>
                                <div class="form-wrap">
                                    <label>1. 姓名</label>
                                    <div class="input-wrap">
                                        <input class="input-text" readonly="" id="w-8ben-name" :value="real_name">
                                    </div>
                                </div>
                                <div class="form-wrap">
                                    <label>2. 国家/地区</label>
                                    <div class="input-wrap">
                                        <input class="input-text" id="w-8ben-country" readonly="" :value="中国">
                                    </div>
                                </div>
                                <div class="form-wrap">
                                    <label>3. 永久居住地址</label>
                                    <div class="input-wrap">
                                        <input class="input-text" readonly="" :value="province">
                                    </div>
                                </div>
                                <div class="form-wrap">
                                    <label>城市或城镇，州或省</label>
                                    <div class="input-wrap">
                                        <input class="input-text" readonly="" :value="city,area">
                                    </div>
                                </div>
                                <div class="form-wrap">
                                    <label>4. 邮寄地址</label>
                                    <div class="input-wrap">
                                        <input class="input-text" readonly="" :value="area,residence_detail">
                                    </div>
                                </div>
                                <div class="form-wrap">
                                    <label>5. 美国纳税人识别号码</label>
                                    <div class="input-wrap">
                                        <input class="input-text">
                                    </div>
                                    <div class="form-group not-us ios-style ">
                                        <input required="" class="" type="checkbox" name="not_us_tax">我不是美国的收入税务居民
                                    </div>
                                    <div class="a-fadeIn not-us-warning">
                                        很抱歉，美国的收入税务居民暂时不能在老虎证券开户，请您谅解！
                                    </div>
                                </div>
                                <div class="form-wrap">
                                    <label>6. 海外税收识别号码</label>
                                    <div class="input-wrap">
                                        <input class="input-text" readonly="" value="">
                                    </div>
                                </div>
                                <div class="form-wrap">
                                    <label>7. 参考编码</label>
                                    <div class="input-wrap">
                                        <input class="input-text" readonly="">
                                    </div>
                                </div>
                                <div class="form-wrap">
                                    <label>8. 出生日期</label>
                                    <div class="input-wrap">
                                    <input class="input-text" readonly="" id="w-8ben-birthday" value="1997-12-27">
                                    </div>
                                </div>
                                <h3>第二部分：税务条约优惠声明</h3>
                                <div> 本人确认，收益所有人在美国与所属国的税收协定下，符合
                                    <div class="form-group tax-country-select">
                                        <select pattern="/^CHN$/" class="form-control" type="select" name="w8ben_tax_residency">
                                            <option value="CHN">中国</option>
                                            <option value="NZL">新西兰</option>
                                            <option value="THA">泰国</option>
                                            <option value="IDN">印度尼西亚</option>
                                            <option value="PHL">菲律宾</option>
                                            <option value="KOR">韩国</option>
                                            <option value="OTHER">本人不是与美国有税收优惠协定国家的居民</option>
                                        </select>
                                        </div>的居民定义
                                    </div>
                                    <h3>第三部分：证明</h3>
                                    <p>根据伪证罪处罚条例，本人声明本人已审查表格中的信息，据本人所知及所信其真实、准确且完整。根据伪证罪处罚条款，本人进一步证明:</p>
                                    <table>
                                        <tbody>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" disabled="" class="input-checkbox ios-style">
                                                    </td>
                                                    <td>
                                                        本人是本表格相关之收入的受益所有人（或被授权为受益所有人签字），或正在使用该表格作为文件证明本人是一家外国金融机构的所有人或账户持有人，
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" disabled="" class="input-checkbox ios-style">
                                                    </td>
                                                    <td>
                                                        表格第一行内填写的人士并非美国人
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" disabled="" class="input-checkbox ios-style">
                                                    </td>
                                                    <td>
                                                        本表格相关收入:<br>(a)与在美的贸易或商业活动无关，<br>(b)虽为相关收入，但根据所得税条约不需要交纳税费，或者<br>(c)为合伙企业相关收入的合伙人收入，
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" disabled="" class="input-checkbox ios-style">
                                                    </td>
                                                    <td>
                                                        该表格第1行填写的人士是表格（如果有的话）所列条约国的居民，属于美国与该国之间达成的所得税协定的作用范围之内，并且
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" disabled="" class="input-checkbox ios-style">
                                                    </td>
                                                    <td>
                                                        对于中间交易或易货交易，受益方正如说明中定义的为豁免外籍人士。<br>本人同意，如果此表格内的证明信息不再准确，本人会在30天内提交一份新的表格。
                                                    </td>
                                                </tr>
                                            </tbody>
                                    </table>
                                </div>
                                <div class="confirm">
                                        点击下方“本人同意”即代表您确认表格W-8BEN内填写的信息真实准确且税务表格的收集和发送均使用电子形式
                                    </div>
                                 </div>
                        </div>
                        
                                <div class="la form-group-control form-inline ios-style " pattern="/^1$/" required="">
                                    <div class="group">
                                        <input type="radio" name="agreement_w8ben">本人同意
                                    </div>
                                    <div class="group">
                                        <input type="radio" name="agreement_w8ben">本人不同意
                                    </div>
                                </div>
                    <div class="agreement-section">
                        本人同意所有税务表格均用过电子形式而非纸质形式收集和发送，包括通过账户管理收集和发送。
                                </div>
                                <div class="form-group-control form-inline ios-style" pattern="/^1$/" required="">
                                <div class="group">
                                    <input type="radio" name="agreement_w8ben_1">本人同意
                                </div>
                                <div class="group">
                                    <input type="radio" name="agreement_w8ben_1">本人不同意
                                </div>
                            </div>
                            <div class="agreement-section">
                                此外，本人授权将此表格提供给任何具备本人名下收入监管、接收或保管权的税务机构，或可向本受益人实际支付减退税的机构。
                            </div>
                            <div class="user-signature">
                            <div class="tip">
                                    本人声明，本人提供的所有开户信息均真实准确并同意在内容有任何变化的情况下以电话或邮件的形式通知老虎，必要时，本人授权老虎证券对资料的准确性进行确认。
                                </div>
                                <div class="info-item">姓名：a</div>
                                <div class="info-item">日期：2018-07-16</div>
                            <div class="form-group">
                                <input placeholder="a" class="form-control" type="text" name="signature_w8ben" value="a">
                            </div>
                        </div>
                </div>
                <!-- 6.上传证件 -->
                <div v-if="nowstate==6" class="form-main">
                    <h3 class="page-title">上传证件和签名</h3>
                    <div class="continue-qrcode">
                        <img src="/static/img/qrcode" alt="qrcode">
                            用手机扫描二维码，拍照上传
                    </div>
                    <div class="form-meta">
                        <p>
                            * 身份证必须为原件，不能为复印件，照片要小于5MB的JPG或PNG格式。
                        </p>
                        <p>
                            * 无法选择照片？您可以复制下面的地址，用手机自带浏览器打开： 
                        </p>
                        <div class="copy-input">
                            <input type="text" class="form-control" readonly="" value="https://www.itiger.com/personal">
                            <button class="clipboard-btn">一键复制</button>
                        </div>
                        <p>* 您必须在支持触屏的设备上书写签名。</p>
                    </div>
                </div>
                <!-- 7.完成开户 -->
                <div v-if="nowstate==7">
                    <div class="open-last-step">
                        <h2>您离开户被受理只差一步</h2>
                        <div class="desc">
                            请补全证件照片，开户才能被成功受理。。<br>您可以随时登陆老虎证券个人中心上传证件照片，查看开户进度。
                        </div>
                        <router-link class="btn btn-primary" to="/personal" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                            个人中心
                        </router-link>
                    </div>
                </div>
                <!-- 右侧 -->
                <div v-if="nowstate!=7" class="sidebar fixed-me">
                    <!-- data-toggle="modal"  模态框 -->
                    <button @click="onenext"  data-target=".bs-example-modal-sm" class="register btn btn-primary btn-block" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                        立即注册 
                    </button>
                    <!-- <div class="error">提示：{{state.err}}</div> -->
                    <div class="small-tip">
                        点击“立即注册”即表示您同意  
                        <a href="/agreement/8?skin=2" target="_blank">用户协议</a>
                    </div>
                <div>
                <div class="dropbox">
                    <a href="javascript:;" class="title">为什么需要我的个人信息？<i class="iconfont icon-xiala"></i></a>
                    <div class="content a-fadeIn">
                        根据美国法律，美国政府要求所有证券经纪商通过收集这些信息来验证您的真实身份，
                        <a target="_blank" href="http://www.sec.gov/answers/bd-persinfo.htm" rel="nofollow">点此</a>
                        了解更多
                    </div>
                </div>
                <div class="dropbox">
                    <a href="javascript:;" class="title">我的邮件会收到广告吗？<i class="iconfont icon-xiala"></i></a>
                    <div class="content a-fadeIn">不会，除了必要的通知信息；老虎证券不会向您发送任何广告信息</div>
                </div>
                <div class="dropbox">
                    <a href="javascript:;" class="title">开户流程有哪些？<i class="iconfont icon-xiala"></i></a>
                    <div class="content a-fadeIn">
                        1 申请注册，填写个人资料<br>2 上传证件，创建交易账户<br>3 网银购汇，选择境外汇款<br>4 下载软件，开始美股交易
                    </div>
                </div>
                <div class="dropbox">
                    <a href="javascript:;" class="title">我的密码安全如何得到保障？<i class="iconfont icon-xiala"></i></a>
                    <div class="content a-fadeIn">
                        老虎证券技术系统采用非对称加密算法来加密存储您的密码。<br>虽然算法强度复杂，但如果您设置的密码和其他网站的密码相同，您的密码还是有被泄露的风险。为了安全，请不要在任何情况下在多个网站使用相同的帐号密码组合，否则一旦您在一个网站的帐号密码被泄露，这些信息会威胁到到您在老虎证券的密码安全。
                    </div>
                </div>
            </div>
                </div>
            </div>
            <!-- 底部 -->
            <div class="footer">
                <p>
                    所有投资都存在风险。任何一支证券或金融产品的历史数据都不能保证其未来的表现及回报。虽然投资多样化可以帮助分散风险，但是并不能在市场低迷时确保您获益或防止您损失。投资证券或金融产品总会存在潜在的亏损可能。投资者在进行投资前需考虑自身的投资目标及风险承受能力。
                </p>
                <p>在进行交易之前，客户敬请阅读我们网站上的相关风险透露声明。</p>
                <p>
                    老虎证券的底层清算：IB（Interactive Brokers，NASDAQ: IBKR），是美国最大的互联网券商，1977年创建，纳斯达克上市公司。致力于提供最快最稳定最安全的电子进场交易技术，直连交易所，而非其他券商通过流动性提供商间接交易。相同时间下单，直连交易所订单成交价格最优。盈透证券集团及其分支机构拥有超过50亿美元的总股本资产，日平均63万3千单的营收交易。
                </p>
                <p>
                    盈透证券是美国注册的经纪商-经销商、期货佣金商，受美国证券交易委员会SEC、商品期货交易委员会CFTC、及国家期货业协会NFA监管，并且是美国金融业管理局 FINRA及其他规管自律组织的会员。美国盈透证券不被隶属于、也不背书或推荐任何金融顾问或经纪商，包括老虎证券。盈透证券为老虎证券介绍的客户提供执行和清算服务。以上的任何信息均不构成推荐、建议，或盈透招揽买入、卖出或持有任何证券、金融产品或工具或参与任何具体投资策略的要约。美国盈透不参与并且对于此网站提供的信息准确度及完成度不作任何陈述及不承担任何责任。 想获得更多的关于盈透证券的信息，敬请访问下面网址 www.interactivebrokers.com 或 www.ibkr.com.cn
                </p>
                <p>老虎证券客服电话：<a href="tel:4006037555">400-603-7555</a></p>

                <p>切换语言：
                    <select>
                        <option value="zh_CN" selected="">简体中文</option>
                        <option value="zh_TW">繁體中文</option>
                        <option value="en_US">English</option>
                    </select>
                </p>
            </div>

        </div>

        <!-- 模态框 -->
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Small modal</button> -->

        <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <p class="modal-title" id="myModalLabel">老虎提示</p>
                    </div>
                    <div class="modal-body">
                        您以注册成功
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">确定</button>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>
<script>
    export default{
        name: 'accounts',
        data(){
            return {
                lis:[
                    {id:0,text:'注册账号'},
                    {id:1,text:'填写资料'},
                    {id:2,text:'选择账户'},
                    {id:3,text:'投资信息'},
                    {id:4,text:'阅读协议'},
                    {id:5,text:'上传证件'},
                    {id:6,text:'完成开户'},
                ],
                // 显示隐藏
                isshow:false,
                // 
                nowstate:1,
                issendmess:false,
                state:{code:0,title:'手机号注册',mess:'使用邮箱注册',err:'请输入手机号码'},
                // 传递信息
                istrue:true,
                isid:false,
                // 1.
                message_phone:'',           //手机号
                message_email:'',           //邮箱
                message_code:'',            //验证码
                message_password:'',        //密码
                message_password_confirm:'',//确认密码
                message_invitation_code:'', //邀请码
                // 2.
                real_name:'',               //真实姓名
                pinyin_first:'',             //姓
                pinyin_last:'',              //名    
                country_code:'CHN',         //国籍
                tax_residence_country:'CHN',//纳税居住地
                multi_area:false,         //是否有其他纳税地
                m1tax_residence_country:'', //其他纳税地
                m1tax_identification_number:'',//纳税识别号
                m1have_tax_identification_number:false,//无纳税识别号
                id_no:'',                   //身份证号
                same_residence_addr:1,     //使用身份地址作为地址证明？
                province:'',                //身份证地址    省份
                city:'',                    //身份证地址    城市
                area:'',                    //身份证地址    地区
                residence_detail:'',        //详细地址
                email:'',                   //邮箱
                family_member:'',           //家庭成员个数
                marital_status:'',          //婚姻状况
                job:'',                     //就业情况
                business:'',                //行业
                career:'',                  //职位
                company:'',                 //单位信息  单位名称
                province:'',                //单位信息  省份
                company_city:'',            //单位信息  城市
                company_area:'',            //单位信息  地区
                work_address_detail:'',     //单位信息  详细地址
                regulatory_members_checked:'',//是否本人
                regulatory_stockholder_checked:'',//是否为上市公司董事，并持有10%股权的股东或决策人
                // 3
                trade_channel:'bs_cash',    //选择账户
                //4
                stk_trade_year:'',          //股票交易年数
                stk_trade_per_year:'',      //股票交易次数
                stk_kl:'',                  //股票交易知识水平
                net_current_assets:'',      //净流动资产
                net_assets:'',              //净资产
                total_assets:'',            //总资产
                net_year_income:"",         //净年收入    
                invest_target:[],           //投资目标     
                // 5
                agreement_0:'',             //法律承认
                agreement_1:'',             //账户交易控制及所有权证明
                agreement_2:'',             //保证金披露
                agreement_3:'',             //客户协议
                agreement_4:'',             //免责隐私声明      
                agreement_5:'',             //其他交易
                agreement_6:'',             //通知
                agreement_7:'',             //期权交易
                agreement_8:'',             //interactive
                w8ben_tax_residency:'',     //税务条约优惠声明
                agreement_w8ben:'',         //w8ben
                agreement_w8ben_1:'',       //所有税务
                signature_w8ben:'',         //签名         
            }
        },
        watch: {
            message_phone (val,oldval) {
                var patt=/^1[3456789][0-9]{9}$/;
                let dom=document.querySelector('.btn-block');
                if(patt.test(val)){
                    dom.removeAttribute('disabled');
                }else{
                    dom.setAttribute('disabled','true')
                }
                var yuyin=document.querySelector('.yuyin');
                var val=document.querySelector("input[name='phone']").value;
                if(yuyin){
                    if(patt.test(val)){
                        yuyin.removeAttribute('disabled');
                    }else{
                        yuyin.setAttribute('disabled','true')
                    }
                }
            },
            m1have_tax_identification_number(val){
                var input=document.querySelector('.nssbh');
                if(val){
                    this.istrue=false;
                }else{
                    this.istrue=true;
                }
            },
            same_residence_addr(val){
                if(val==1){
                    this.isid=false;
                }else{
                    this.isid=true;
                }
            }
        },
        mounted(){
            var btna=document.querySelectorAll('.agreement-group .title');
            btna.forEach(function(item,index){
                item.nextElementSibling.style.cssText='height:0px;padding:0px;transition:all 0.5s';
                item.onclick=function(){
                    if(!(this.nextElementSibling.style.height=='0px')){
                        this.nextElementSibling.style.cssText='height:0px;padding:0px;transition:all 0.5s';
                    }else{
                        this.nextElementSibling.removeAttribute('style')
                    }
                }
            })
            $('.dropbox a').click(function(){
                $(this).find('i').animate({rotate:"180deg"},200)
                $(this).next('.a-fadeIn').stop().fadeToggle();
                var ro=$(this).find('i').attr("style");
                if(ro=="transform: rotate(180deg) scale(1, 1);"){
                    $(this).find('i').animate({rotate:"360deg"},200)
                }
            })
        },
        methods:{
            // 下一步验证
            onenext(){
                this.$validator.validateAll().then((result)=>{
                    if(result){
                        // $.post(url, data, xhr => {
                        //     this.$store.commit(MESSAGE, {
                        //         status: 'success',
                        //         text: '操作成功了！'
                        //     })
                        // })
                        this.nowstate++;
                    }
                })
            },
            sendyuyin(){
                this.issendmess=true;
                // 语音验证
                this.message_phone='';
            },
            exchange:function(){
                this.state=this.state.code==1? {code:0,title:'手机号注册',mess:'使用邮箱注册',err:"请输入手机号码"}:{code:1,title:'邮箱注册',mess:'使用手机号注册',err:'请填写邮箱'};
            },
            sendCode(){
                console.log('发送验证码')
            }

            
        }
    }
</script>
<style scoped lang='scss'>
    .registrantionitem{
        margin: 30px 0;
        a{
            img.logo{
                float: left;
                width: 40px;
                height: 40px;
                background-color: #ffe100;
                border-radius: 100%;
            }
        }
        ul.clearfix{
            margin-left: 60px;
            padding: 0;
            list-style: none;
            color: #a3a3a3;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            li:first-child{
                .bar{
                    border-radius: 5px 0 0 5px;
                }
            }
            li.active{
                .bar{
                    background: #ffe100;
                }
                .title{
                    color: #333;
                    font-weight: 700;
                }
            }
            li{
                flex: 1 1;
                .bar{
                    background: #ffe100;
                    height: 10px;
                    background: #f2f4f6;
                    margin: 0 1px 10px;
                    -webkit-transition: background .5s ease;
                    -o-transition: background .5s ease;
                    transition: background .5s ease;
                }
                .title{
                    margin-left: 8px;
                    color: #a3a3a3;
                }
                .mobile-title{
                    display: none;
                }
            }
        }
    }
    .main{
        a{
            text-decoration: none;
        }
        width: 960px;
        margin: 0 auto;
        .container {
            width: 100%;
            position:relative;
            // 完成开户
            .open-last-step{
                    text-align: center;
                    padding: 30px 0;
                    h2{
                        font-weight: bold;
                        font-size: 30px;
                        margin: 1em;
                    }
                    .desc {
                        margin: 1em;
                    }
                    a{
                        font-weight: 700;
                        font-size: 16px;
                        width: 200px;
                        background-color: #ffe100;
                        color: #333;
                        border-color: #ffe100;
                    }
            }
            .form-main{
                float: left;
                width: 540px;
                // 上传证件
                .page-title{
                    font-size: 20px;
                    margin-bottom: 20px;
                }
                .continue-qrcode{
                    background-color: #f1f7ff;
                    padding: 15px;
                    text-align: center;
                    img{
                        width: 180px;
                        display: block;
                        margin: 0 auto 10px;
                    }
                }
                .form-meta{
                    font-size: 13px;
                    color: #888;
                    margin-top: 30px;
                }
                // 阅读协议
                .la {
                    background-color: #f0ad4e;
                    padding: 10px;
                    margin: 10px 0;
                }
                .agreement-section{
                    margin: 1em 0;
                }
                .user-signature {
                    .info-item{
                        margin: 10px 0;
                    }
                    .form-group{
                        margin-bottom: 20px;
                        position: relative;
                        input{
                            background-color: #f2f4f6;
                        }
                    }
                }
                .agreement-group{
                    .w-8ben-form {
                        color: #a3a3a3;
                        background: #eff3f3;
                        position: relative;
                        padding-bottom: 70px;
                        .contents{
                            max-height: none;
                            color: #a3a3a3;
                            background: #eff3f3;
                            padding: 15px;
                            overflow-y: auto;
                            h2{
                                text-align: center;
                                font-size: 20px;
                                line-height: 1.3;
                                margin-bottom: 1em;
                            }
                            p{
                                margin-bottom: 1.5em;
                            }
                            h3{
                                font-size: 16px;
                                font-weight: bold;
                            }
                            .form-wrap{
                                .input-wrap{
                                    input{
                                        border: 1px solid #ccc;
                                        background-color: #eee;
                                        border-radius: 5px;
                                        height: 30px;
                                        width: 200px;
                                        padding: 5px 10px;
                                        margin-bottom: 5px;
                                    }
                                }
                            }
                            table{
                                tr{
                                    
                                }
                                input{
                                    margin:-2px 5px 0 0;
                                    -webkit-appearance: checkbox;
                                }
                            }
                        }
                        .confirm{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            padding: 15px;
                            background-color: #888;
                            color: #fff;
                        }
                    }
                }
                .opened{
                    a.title{
                        display: block;
                        padding: 10px;
                        color: #333;
                        font-weight: 700;
                        background: #fafbfb;
                        position: relative;
                    }
                    a.title:after {
                        display: block;
                        content: "";
                        position: absolute;
                        height: 0;
                        width: 0;
                        border: 6px solid transparent;
                        border-top-color: #888;
                        right: 15px;
                        top: 18px;
                        -webkit-transition: -webkit-transform .5s ease;
                        transition: -webkit-transform .5s ease;
                        -o-transition: transform .5s ease;
                        transition: transform .5s ease;
                        transition: transform .5s ease,-webkit-transform .5s ease;
                        -webkit-transform-origin: center 5px;
                        -ms-transform-origin: center 5px;
                        transform-origin: center 5px;
                    }
                    .content{
                        color: #a3a3a3;
                        background: #eff3f3;
                        padding: 15px;
                        max-height: 300px;
                        overflow-y: auto;
                        p{
                            margin-bottom: 1em;
                        }
                    }
                    .form-group-control{
                        background-color: #f0ad4e;
                        padding: 10px;
                        margin: 10px 0;
                    }
                }
                // 投资信息
                .ef-invalid{
                    .form-group{
                        margin-right: 40px;
                        label{
                            font-weight: normal;
                            input{
                                margin: -2px 5px 0 0;
                                display: inline-block;
                                -webkit-appearance: checkbox;
                            }
                        }
                    }
                }
                .asset-group{
                    margin-bottom: 20px;
                    
                    .label{
                        width: 48%;
                        padding: 0;
                        display: inline-block;
                        white-space: normal;
                        color:#333;
                        text-align: left;
                        h4{
                            font-size: 14px;
                            margin: 0;
                            font-weight: 700;
                        }
                        p{
                            font-size: 14px;
                            font-weight: normal;
                            line-height: 1.7;
                        }
                    }
                    .form-group{
                        display: inline-block;
                        margin: 0 0 0 3%;
                    }
                }
                .asset-group>* {
                    display: inline-block;
                    width: 48%;
                    vertical-align: middle;
                }
                // 填写资料
                
                .business-career{
                    .form-group{
                        float: left;
                        width: 48.5%;
                    }
                    .form-group:nth-of-type(2){
                        margin-left: 3%;
                    }
                }
                .province-city-group{
                    .form-group{
                        float: left;
                        width: 31%;
                    }
                    .form-group:nth-of-type(2){
                        margin: 0 3.5%;
                    }
                }
                .form-inline {
                    margin-bottom: 20px;
                }
                .residence-address-box{
                    background-color: hsla(51,17%,79%,.32);
                    padding: 10px;
                    margin-bottom: 20px;
                    border-radius: 3px;
                    .province-city-group{
                        .form-group{
                            float: left;
                            width: 31%;
                        }
                    }
                    .province-city-group>:nth-child(2) {
                        margin: 0 3.5%;
                    }
                }
                .id_no-group{
                    .form-group:first-child {
                        width: 30%;
                        float: left;
                    }
                    .form-group:last-child {
                        width: 66%;
                        margin-left: 4%;
                        float: left;
                    }
                }
                .form-group-control{
                    .group{
                        display: inline-block;
                        margin-right: 20px;
                        input{
                            
                        }
                    }
                }
                .form-title{
                    font-size: 16px;
                    font-weight: 700;
                    margin: 0 0 1em;
                }
                .real-name-pinyin{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    .form-group{
                        display: inline-block;
                        width: 48%;
                        vertical-align: top;
                        box-sizing: border-box;
                    }
                }
                .ios-style{
                    input{
                        margin: -2px 10px 0 0;
                        display: inline-block;
                        -webkit-appearance: checkbox;
                    }
                }

                .has-error,.not-us-warning{
                    display: none;
                }
                .not-us-warning {
                    background-color: #a94442;
                    padding: 10px;
                    color: #fff;
                    margin-bottom: 1.5em;
                }
                

                
                h3.page-title {
                    font-size: 20px;
                    margin-bottom: 20px;
                    font-weight: bold;
                    a{
                        font-size: 14px;
                        color:#4e97fa;
                        font-weight: bold;
                        background-color: transparent;
                    }
                }
                .account-form{
                    .field-phone-group{
                        .telcode-phone{
                            .telcode {
                                width: 30%;
                                float: left;
                                a{
                                    padding-right: 20px;
                                    color: #888;
                                    span.c{
                                        color: #888;
                                    }
                                    span.t{
                                        color: #333;
                                    }
                                }
                            }
                            .phone{
                                float: right;
                                width: 67%;
                                margin-left: 3%;
                            }
                        }
                        .send-msg{
                            .code {
                                float: left;
                                width: 48.5%;
                            }
                            .send-btn{
                                float: right;
                                width: 48.5%;
                                button{
                                    background-color: hsla(0,0%,78%,.3);
                                    color: #bbb;
                                }
                            }
                        }
                    }
                    // 密码
                    .has-ef-error{
                        input{
                            
                        }
                    }
                }
                .form-meta{
                    font-size: 13px;
                    color: #888;
                    margin-top: 30px;
                }
            }
            .sidebar{
                float: right;
                margin-top: 50px;
                width: 250px;
                .error{
                    color: #fff;
                    margin: 10px 0;
                    padding: 10px;
                    border-radius: 4px;
                    background-color: #f0ad4e;
                }
                .small-tip{
                    font-size: 13px;
                    color: #aaa;
                    margin: 8px 0;
                }
                .dropbox{
                    border-top: 1px solid #f0f0f0;
                    a.title{
                        color: #333;
                        display: block;
                        padding: 10px 16px 10px 0;
                        line-height: 1.4;
                        position: relative;
                        i{
                            display: block;
                            width: 10px;
                            height: 10px;
                            text-align: center;
                            float: right;
                            margin-right: 5px;
                            font-size: 10px;
                            color: #888;
                        }
                    }
                    .content {
                        display: none;
                        color: #333;
                        margin-bottom: 20px;
                    }
                }
            }
        }
        .footer{
            font-size: 12px;
            text-align: justify;
            color: #a3a3a3;
            border-top: 1px solid #f0f0f0;
            width: 540px;
            margin-top: 50px;
            p{
                margin: 1.5em 0;
            }
        }
    }


    // 右侧固定
    .sidebar {
        position: absolute;
        top:50px;
        right:0px;
    }
    // 错误信息提示
    .form-submit-error{
        margin-top: 0px;
        margin-bottom: 15px;
        padding: 10px;
        color: #fff;
        background: #fe5656;
    }
</style>