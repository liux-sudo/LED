$(function () {
    // const view = new ViewAdap();
    // view.setViewMode({
    //     designWidth: 1920,
    //     designHeight: 1080,
    //     mode: 'contain'
    // });


    // 人民币滚动事件
    var mum = 60
    var top = 0;
    var height = $('.gupiao .content .box>div .pppp').height()
    setInterval(function () {
        top--
        if (top <= -height + 135) {
            top = 0
        }
        $('.gupiao .content .box>div .pppp').css({ top: top })
    }, mum)




    var top1 = 0;
    var height1 = $('.gupiao .content .box1>div>div').height()
    setInterval(function () {
        top1--
        if (top1 <= -height1) {
            top1 = 143
        }
        $('.gupiao .content .box1>div>div').css({ top: top1 })
    }, mum)


    var top4 = 0
    var height4 = $('.wbck-content>div>div').height()
    setInterval(function () {
        top4--
        if (top4 <= -height4 + 900) {
            top4 = 0
        }
        $('.wbck-content>div>div').css({ top: top4 })
    }, mum)


    // 请求数据
    var url = './data/'
    // ajax封装
    let jqPostAjaxPromise = function (param) {
        // 接口地址
        // let baseUrl = "http://188.131.235.7/";
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url + param.url,
                type: param.type,
                page: param.page,
                limite: param.limite,
                data: param.data || '',
                dataType: "json",
                success: function (data) {
                    resolve(data);
                },
                error: function (error) {
                    reject(error)
                }
            });
        });
    };

    // 请求结售汇
    function getnav() {
        jqPostAjaxPromise({
            url: "foreign.json",
            type: "get",
            data: {}
        }).then(res => {
            var data = res.ToCusOfrOutGrp
            var data1 = res
            var div = ''
            for (var i in data) {
                div += `<div class="jsh">
					<div class="jsh-content">
						<p class="bz">${data[i].Ofrd_Ccy_CcyCd_DESC}</p>
					</div>
					<div class="jsh-content1">
						<p class="jsh-content1-p1">${data[i].BidRateOfCcy}</p>
					</div>
					<div class="jsh-content1">
						<p class="jsh-content1-p1">${data[i].OfrRateOfCcy}</p>
					</div>
					<div class="jsh-content1">
						<p class="jsh-content1-p1">${data[i].BidRateOfCash}</p>
					</div>
					<div class="jsh-content1">
						<p class="jsh-content1-p1">${data[i].OfrRateOfCash}</p>
					</div>
				</div>`
            }
            $('.gjs-content .div1>div').html(div)
            var top2 = 0
            var height2 = $('.gjs .gjs-content .div1>div').height()
            setInterval(function () {
                top2--
                if (top2 <= -height2 + 180) {
                    top2 = 0
                }
                $('.gjs-content>div>div').css({ top: top2 })
            }, mum)
        }).catch(err => {
            console.log(err)
        })
    }
    getnav();



    // 请求基金
    function getjj() {
        jqPostAjaxPromise({
            url: "fund.json",
            type: "get",
            data: {}
        }).then(res => {
            var data = res.database_result.data
            var div = ''
            for (var i in data) {
                var lx1 = ''
                var lx = data[i].FUNDTYPE
                if (lx == 1) {
                    lx1 = '非货币'
                } else {
                    lx1 = '货币'
                }
                div += `<div class="jijin-content-box">
                <div class="jijin-content-box-left">
                    <p class="content1">${data[i].PRODNAME}</p>
                </div>
                <div class="liuxu">
                    <p>${lx1}</p>
                </div>
                <div class="liuxu1">
                    <p>${data[i].TOTALVALUE}</p>
                  
                </div>
                <div>
                    <p>${data[i].VALUEDATE}</p>
                </div>
                <div class="jijin-content-box-last">
                    <p class="jijin-content-box-last-p3">${data[i].INCREASEDAY}</p>
                </div>
            </div>`
            }
            // <p class="jijin-content-box-last-p3-1">-0.30</p>
            $('.jijin-content .div1>div').html(div)
            var top3 = 0
            var height3 = $('.jijin-content>div>div').height()
            setInterval(function () {
                top3--
                if (top3 <= -height3 + 165) {
                    top3 = 0
                }
                $('.jijin-content>div>div').css({ top: top3 })
            }, mum)
        }).catch(err => {
            console.log(err)
        })
    }
    getjj();

    // 請求貴金屬
    function getgjs() {
        jqPostAjaxPromise({
            url: "prcgold.json",
            type: "get",
            data: {}
        }).then(res => {
            var data = res.PMAccGld_Bss_Prc_List
            var div = ''
            console.log(data)

            for (var i in data) {
                div += `<div class="content3">
            <div class="lx">${data[i].PM_Txn_Vrty_Cd}<span>${data[i].CcyCd}</span></div>
                <div class="kh">
                    <div>
                        <img src="./img/xia.png" alt="">
                        <p>客户买入</p>
                    </div>
                    <div>
                        <img src="./img/shang.png" alt="">
                        <p>客户卖出</p>
                    </div>
                </div>
                <div class="num">
                    <p>${data[i].Cst_Buy_Prc}</p>
                    <p>${data[i].Cst_Sell_Prc}</p>
                </div>
            </div>`
            }
            $('.zhgjs-content-box>div>div').html(div)
            var top5 = 0
            var height5 = $('.zhgjs-content-box>div>div').height()
            setInterval(function () {
                top5--
                if (top5 <= -height5 + 165) {
                    top5 = 0
                }
                $('.zhgjs-content-box>div>div').css({ top: top5 })
            }, mum)
        }).catch(err => {
            console.log(err)
        })
    }
    getgjs();

    // 股盘大脂
    function getgpdz() {
        jqPostAjaxPromise({
            url: "stockindex.json",
            type: "get",
            data: {}
        }).then(res => {
            var data = res.database_result
            var div = ''
            // var Class;
            for (var i in data) {
                
                div += `<div class="content4-title">
                ${data[i].DSPLYNMLL}<span>（${data[i].SYMBOL}）</span>
            </div>
            <div class="content4-fotter">
                <div>
                    <p class="price">当前价格</p>
                    <p class="p">${data[i].OPENPRICE}</p>
                </div>
                <div>
                    <p class="price">涨跌额</p>
                    <p class="p">${data[i].NETCHNG}</p>
                </div>
                <div>
                    <p class="price">涨跌幅(%)</p>
                    <p class="p p1">${data[i].PCTCHNG}</p>
                </div>
            </div>`
           
            }
            $('.gzdp-content-box .content4>div').html(div)

            $(".content4-fotter>div .p1").each(function(){
                var value = $(this).html()
                if(value.indexOf("-") != -1){
                    $(this).parent().parent().find('.p').addClass('action3')
                }else if(value.indexOf("+") != -1){
                    $(this).parent().parent().find('.p').addClass('action')
                }
            })

           
            var top8 = 0
            var height8 = $('.gzdp-content-box .content4>div').height()
            setInterval(function () {
                top8--
                if (top8 <= -height8 + 165) {
                    top8 = 0
                }
                $('.gzdp-content-box .content4>div').css({ top: top8 })
            }, mum)
            
           
        }).catch(err => {
            console.log(err)
        })
    }
    getgpdz();


});
