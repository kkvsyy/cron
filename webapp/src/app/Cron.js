/**
 * @docauthor qiaoyongjun <qiaoyongjun@126.com、qiaoyongjun@gmail.com>
 * 解析和生成Quartz Cron表达式，一般用于定时任务
 */
Ext.define('CEB.app.Cron', {
	extend : 'Ext.Viewport',
	layout : 'border',
	defaults : {
		style : {
			margin : '3px'
		}
	},
	initComponent : function() {
		var me = this;
		me.items = [ {
			region : 'center',
			title : 'CEB',
			defaults : {
				style : {
					margin : '3px'
				}
			},
			layout : 'border',
			items : [ Ext.create('CEB.widget.QuartTab', {
				itemId : 'queryTab',
				region : 'north'
			}), Ext.create('CEB.widget.ExpressionPanel', {
				itemId : 'expressionPanel',
				region : 'center'
			}), Ext.create('Ext.panel.Panel', {
				region : 'south',
				border : false,
				dockedItems : [ {
					xtype : 'toolbar',
					dock : 'bottom',
					items : [ {
						flex : 1,
						xtype : 'tbspacer'
					}, {
						xtype : 'button',
						text : '生成Quartz Cron表达式',
						handler:function(){
							var date = me.down('#queryTab').getDate()
							,exp = me.down('#expressionPanel')
							,resultInfo = null;
							exp.setDateValues(date);
							var quartzCron = exp.getQuartzCron();
							resultInfo = 'Cron Expression ：' + quartzCron;
							exp.setCronExpression(resultInfo);
						}
					} ]
				} ]
			}) ]
		} ];
		me.callParent();
	}
});