//	boundAsync为智慧银行客户端内封装对象，p2TransRequest为该对象的Promise请求方法
//	boundAsync.p2TransRequest(JSON.stringify(data)).then((res)=>{
		//财经资讯返回数据都是json字符串
//		res = JSON.parse(res);
//		
//	})	
	
	
	//大盘数据
	//返回报文stockindex.json
var jsonDataIdx = {
		"TXN_ITT_CHNL_CGY_CODE": "20190031",
		"_sql_id" : "zhyhQuery.getStockPriceFromDB"
	};
var reqDataIdx = {
		"_fw_service_id" : "databaseTransaction", 
		"transaction_id" : "findList", 
		"_sql_id" : "zhyhQuery.getStockPriceFromDB"
	};
					
	reqDataIdx.jsonData = JSON.stringify(jsonDataIdx);
	boundAsync.p2TransRequest(JSON.stringify(data)).then((res)=>{
		console.log(res)
		res = JSON.parse(res);
		// TODO Auto-generated method stub
		
	})

//排行榜
var jsonData = {
		"_fw_service_id" : "databaseTransaction",
		"transaction_id" : "findList", 
		"_sql_id" : "padcc.getStockUpAndDown"
	};
	jsonData.jsonData ={"_sql_id" : "padcc.getStockUpAndDown"};
	
	
	boundAsync.p2TransRequest(JSON.stringify(jsonData)).then((res)=>{
		console.log(res)
	})

//账户贵金属
//返回报文prcgold.json
var dataReq = {};
    dataReq._fw_service_id = "simpleTransaction";
    dataReq.transaction_id = "A1142P007-common";
    dataReq.jsonData = {};
    boundAsync.p2TransRequest(JSON.stringify(dataReq)).then(function (res) {
    	res = JSON.parse(res);
    	// TODO Auto-generated method stub
    })
    

//基金
//返回报文fund.json
var jsonData = {
		"fundStatus":'1',
		'_start':0, 
		'_max_rows':'50',
		"TXN_ITT_CHNL_CGY_CODE": "20190031",
		"_sql_id":"fund.fundListNew"
	};
var dataReq = {
		"_fw_service_id" : "databaseTransaction", 
		"transaction_id" : "findPaginatedList", 
		"_sql_id" : "fund.fundListNew"
	};
	dataReq.jsonData = JSON.stringify(jsonData);
    
	boundAsync.p2TransRequest(JSON.stringify(dataReq)).then(function (res) {
		res = JSON.parse(res);
		// TODO Auto-generated method stub
	})
	



//汇率
//返回报文foreign.json

var jsonData = {
		'ExRt_Ctlg_ID':'11100102',
		'CCBIns_ID':'140000000',
		'OPER_CODE' : '12260116'
	};
var dataReq = {
		"_fw_service_id" : "simpleTransaction", 
		"transaction_id" : "A11422270-common", 
	};
	dataReq.jsonData = JSON.stringify(jsonData);

	boundAsync.p2TransRequest(JSON.stringify(dataReq)).then(function (res) {
		res = JSON.parse(res);
		// TODO Auto-generated method stub
	})
