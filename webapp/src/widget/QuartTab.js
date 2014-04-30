/**
 * @docauthor qiaoyongjun <qiaoyongjun@126.com、qiaoyongjun@gmail.com>
 * QuartTab 时间 日期 布局
 */
Ext.define('CEB.widget.QuartTab', {
	extend : 'Ext.tab.Panel',
	width : 650,
	height : 300,
	defaults : {
		bodyPadding : 10
	},
	initComponent : function() {
		var me = this;
		me.items = [ {
			title : '秒',
			defaults : {
				border : false
			},
			items : [ {
				itemId:'secondForm',
				xtype : 'form',
				defaults : {
					border : false
				},
				getSecondValues:function(){
					var st = this.down('#secondType')
					,sst = this.down('#selfSencondType');
					if(!st.getNumFieldsValues()){//如果结果返回一个false，则说明用户选择了自定义格式
						return sst.getAllChecked();
					}else{
						return st.getNumFieldsValues();
					}
				},
				items : [ Ext.create('CEB.form.S2E',{
					itemId:'secondType',
					border:false,
					everyValue:5,
					suffixName : 'Second',
					changeStatus : function(){
						me.down('#selfSencondType').setAllCheckBoxStatus(true);
						me.down('#secondType').setNumFieldStatus(false);
					}
				}), {
					xtype : 'panel',
					items : [ {
						xtype : 'radio',
						boxLabel : '自定义',
						name : 'secondType',
						listeners : {
							'focus' : function() {
								me.down('#selfSencondType').setAllCheckBoxStatus(false);
								me.down('#secondType').setNumFieldStatus(true);
							}
						}
					}, Ext.create('CEB.form.Z2FN', {
						itemId : 'selfSencondType'
					}) ]
				} ]
			} ]
		}, {
			title : '分钟',
			defaults : {
				border : false
			},
			items : [ {
				itemId:'minuteForm',
				xtype : 'form',
				defaults : {
					border : false
				},
				getMinuteValues:function(){
					var mt = this.down('#minuteType')
					,smt = this.down('#selfMinuteType');
					if(!mt.getNumFieldsValues()){//如果结果返回一个false，则说明用户选择了自定义格式
						return smt.getAllChecked();
					}else{
						return mt.getNumFieldsValues();
					}
				},
				items : [ Ext.create('CEB.form.S2E',{
					itemId:'minuteType',
					border:false,
					fromValue:0,
					everyValue:5,
					suffixName : 'Minute',
					changeStatus : function(){
						me.down('#selfMinuteType').setAllCheckBoxStatus(true);
						me.down('#minuteType').setNumFieldStatus(false);
					}
				}), {
					xtype : 'panel',
					items : [ {
						xtype : 'radio',
						boxLabel : '自定义',
						name : 'secondType',
						listeners : {
							'focus' : function() {
								me.down('#selfMinuteType').setAllCheckBoxStatus(false);
								me.down('#minuteType').setNumFieldStatus(true);
							}
						}
					}, Ext.create('CEB.form.Z2FN', {
						itemId : 'selfMinuteType'
					}) ]
				} ]
			} ]
		}, {
			title : '小时',
			defaults:{
				border:false
			},
			items:[{
				itemId : 'hourForm',
				xtype :'form',
				getHoureValues:function(){
					if(this.down('#rdoHour').checked){
						return '*';
					}else{
						return this.down('#ampm').getAllChecked();
					}
				},
				items:[{
					itemId:'rdoHour',
					xtype:'radio',
					boxLabel:'每小时',
					name:'hourType',
					checked:true,
					listeners:{
						'focus':function(){
							me.down('#ampm').setAllCheckBoxStatus(true);
						}
					}
				},{
					xtype:'radio',
					boxLabel:'自定义',
					name:'hourType',
					listeners:{
						'focus':function(){
							me.down('#ampm').setAllCheckBoxStatus(false);
						}
					}
				},Ext.create('CEB.form.AMPM',{
					itemId:'ampm'
				})]
			}]
		}, {
			title : '天',
			defaults:{
				border:false
			},
			items:[{
				itemId:'dayForm',
				xtype :'form',
				getDayValues:function(){
					if(this.down('#rdoDay').checked){
						return '*';
					}else{
						return this.down('#day').getAllChecked();
					}
				},
				items:[{
					itemId:'rdoDay',
					xtype:'radio',
					boxLabel:'每天',
					name:'dayType',
					checked:true,
					listeners:{
						'focus':function(){
							me.down('#hour').setAllCheckBoxStatus(true);
						}
					}
				},{
					xtype:'radio',
					boxLabel:'自定义',
					name:'dayType',
					listeners:{
						'focus':function(){
							me.down('#day').setAllCheckBoxStatus(false);
						}
					}
				},Ext.create('CEB.form.DAY',{
					itemId:'day'
				})]
			}]
		}, {
			title : '月',
			defaults:{
				border:false
			},
			items:[{
				itemId:'monthForm',
				xtype :'form',
				getMonthValues:function(){
					if(this.down('#rdoMonth').checked){
						return '*';
					}else{
						return this.down('#month').getAllChecked();
					}
				},
				items:[{
					itemId:'rdoMonth',
					xtype:'radio',
					boxLabel:'每月',
					name:'monthType',
					checked:true,
					listeners:{
						'focus':function(){
							me.down('#month').setAllCheckBoxStatus(true);
						}
					}
				},{
					xtype:'radio',
					boxLabel:'自定义',
					name:'monthType',
					listeners:{
						'focus':function(){
							me.down('#month').setAllCheckBoxStatus(false);
						}
					}
				},Ext.create('CEB.form.MONTH',{
					itemId:'month'
				})]
			}]
		}, {
			title : '周',
			items:[{
				itemId:'weekForm',
				xtype:'form',
				border:false,
				getWeekValues:function(){
					if(this.down('#chkWeek').checked){
						return this.down('#week').getAllChecked();
					}else{
						return '?';
					}
				},
				items:[{
					itemId:'chkWeek',
					xtype:'checkbox',
					boxLabel:'使用周',
					listeners:{
						'change':function( thiz, newValue, oldValue, eOpts){
							if(newValue){
								me.down('#week').setDisabled(false);
							}else{
								me.down('#week').setDisabled(true);
							}
						}
					}
				},Ext.create('CEB.form.WEEK',{
					itemId:'week'
				})]
			}]
		} ];
		me.callParent();
	},
	/**
	 * 获取时间
	 */
	getDate : function() {
		var me = this
		, result={}
		, secondForm = me.down('#secondForm')
		, minuteForm = me.down('#minuteForm')
		, hourForm = me.down('#hourForm')
		, dayForm = me.down('#dayForm')
		, monthForm = me.down('#monthForm')
		, weekForm = me.down('#weekForm');
		var secondValues = secondForm.getSecondValues()
		, minuteValues = minuteForm.getMinuteValues()
		, hourValues = hourForm.getHoureValues()
		, dayValues = dayForm.getDayValues()
		, monthValues=monthForm.getMonthValues()
		, weekValues = weekForm.getWeekValues();
		if (!secondValues) {
			console.log('VerifyError : 没有指定秒!');
			return false;
		}
		if(!minuteValues){
			console.log('VerifyError : 没有指定分钟!');
			return false;
		}
		if(!hourValues){
			console.log('VerifyError : 没有指定小时!');
			return false;
		}
		if(!dayValues){
			console.log('VerifyError : 没有指定天!');
			return false;
		}
		if(!monthValues){
			console.log('VerifyError : 没有指定月!');
			return false;
		}
		if(!weekValues){
			console.log('VerifyError : 没有指定周!');
			return false;
		}
		result['second'] = secondValues;
		result['minute'] = minuteValues;
		result['hour'] = hourValues;
		result['day']=dayValues;
		result['month']=monthValues;
		result['week']=weekValues;
		return result;
	}
});