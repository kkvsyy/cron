/**
 * @docauthor qiaoyongjun <qiaoyongjun@126.com、qiaoyongjun@gmail.com>
 * 秒和分钟的默认设置 
 */
Ext.define('CEB.form.S2E', {
	extend : 'Ext.panel.Panel',
	layout : {
		type : 'hbox',
		pack : 'start',
		align : 'stretch'
	},
	initComponent : function() {
		var me = this;
		me.items = [ {
			xtype : 'radio',
			itemId:'rdo',
			boxLabel : '循环',
			name : 'secondType',
			checked : true,
			flex : 1,
			listeners : {
				'focus' : function() {
					//me.down('#selfSencondType').setAllCheckBoxStatus(true);
					me.changeStatus();
				}
			}
		}, {
			xtype : 'numberfield',
			fieldLabel : 'From',
			labelAlign : 'right',
			itemId :'from',
			maxValue : 59,
			minValue : 0,
			value : me.fromValue ? me.fromValue : 0,
			flex : 5
		}, {
			xtype : 'label',
			text : me.suffixName+' Start',
			margin : '4 0 0 10',
			flex : 3
		}, {
			xtype : 'numberfield',
			fieldLabel : 'Every',
			labelAlign : 'right',
			itemId:'every',
			maxValue : 50,
			minValue : 1,
			value : me.everyValue ? me.everyValue : 1,
			flex : 5
		}, {
			xtype : 'label',
			text : me.suffixName+' Excute',
			margin : '4 0 0 10',
			flex : 4
		} ];
		me.callParent();
	},
	setNumFieldStatus:function(b){
		this.down('#from').setDisabled(b);
		this.down('#every').setDisabled(b);
	},
	getNumFieldsValues:function(){
		var rdo = this.down('#rdo');
		if(rdo.checked){
			return this.down('#from').getValue()+'/'+this.down('#every').getValue(0);
		}
		return false;
	}
});