/**
 * @docauthor qiaoyongjun <qiaoyongjun@126.com、qiaoyongjun@gmail.com>
 * 表达式生成
 */
Ext.define('CEB.widget.ExpressionPanel', {
	extend : 'Ext.form.Panel',
	title : '表达式',
	width : 650,
	height : 300,
	defaults : {
		border : false,
		layout : {
			type : 'hbox'
		}
	},
	//y-M-d H:m:s
	initComponent : function() {
		var me = this;
		me.items = [ {
			xtype : 'panel',
			defaults : {
				xtype : 'textfield',
				style : {
					margin : '5px 5px 0 0'
				},
				labelAlign : 'right',
				width : 160,
				labelWidth : 30
			},
			items : [ {
				itemId:'s',
				fieldLabel : '秒'
			}, {
				itemId:'mm',
				fieldLabel : '分钟'
			}, {
				itemId:'h',
				fieldLabel : '小时'
			}, {
				itemId:'d',
				fieldLabel : '天'
			}, {
				itemId:'M',
				fieldLabel : '月'
			}, {
				itemId:'w',
				fieldLabel : '周'
			} ]
		}, {
			xtype : 'container',
			style : {
				margin : '10px 5px 0 15px'
			},
			height : 120,
			bodyPadding : 10,
			border : '1px',
			items : [ {
				height:120,
				width:800,
				bodyStyle:{
					padding:'5px'
				},
				itemId:'expPanel'
			} ]
		}, {
			xtype : 'container',
			style : {
				margin : '10px 5px 0 15px'
			},
			width : 500,
			height : 20,
			bodyPadding : 10,
			border : '1px',
			items : [ {
				border:false,
				html : '<div class="warning">注：同时设置\'周\'和\'天\'的情况下，\'天\'的设置无效！</div>'
			} ]

		} ];
		me.callParent();
	},
	setDateValues:function(data){
		var s = this.down('#s'),mm = this.down('#mm'),h=this.down('#h'),d=this.down('#d'),M=this.down('#M'),w = this.down('#w');
		s.setValue(data['second']);
		mm.setValue(data['minute']);
		h.setValue(data['hour']);
		if(data['week']=='*'){
			d.setValue('?');
		}else{
			d.setValue(data['day']);
		}
		M.setValue(data['month']);
		w.setValue(data['week']);
	},
	getQuartzCron:function(){
		var s = this.down('#s'),mm = this.down('#mm'),h=this.down('#h'),d=this.down('#d'),M=this.down('#M'),w = this.down('#w'),cron=[];
		cron.push(s.getValue());
		cron.push(mm.getValue());
		cron.push(h.getValue());
		cron.push(d.getValue());
		cron.push(M.getValue());
		cron.push(w.getValue());
		return cron.join(' ');
	},
	setCronExpression:function(resultInfo){
		this.down('#expPanel').body.setHTML(resultInfo);
	}
});