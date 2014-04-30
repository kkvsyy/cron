/**
 * @docauthor qiaoyongjun <qiaoyongjun@126.com、qiaoyongjun@gmail.com>
 * 1周7天，分别为：0，1，2，3，4，5，6（周天，周一，周二，周三，周四，周五，周六）
 */
Ext.define('CEB.form.WEEK', {
	extend : 'Ext.form.Panel',
	defaults : {
		style : {
			margin : '5px'
		}
	},
	disabled : true,
	initComponent : function() {
		var me = this;
		me.items = [ {
			itemId : 'rdoWeek',
			xtype : 'radio',
			name : 'weekType',
			boxLabel : '每周',
			checked : true,
			listeners : {
				'focus' : function() {
					me.down('#self').setDisabled(true);
				}
			}
		}, {
			xtype : 'radio',
			name : 'weekType',
			boxLabel : '自定义',
			listeners : {
				'focus' : function() {
					me.down('#self').setDisabled(false);
				}
			}
		}, {
			xtype : 'panel',
			itemId : 'self',
			layout : {
				type : 'hbox'
			},
			disabled : true,
			border : false,
			defaults : {
				style : {
					margin : '5px'
				}
			},
			items : me.generateWeekCheckbox()
		} ];
		me.callParent();
	},
	generateWeekCheckbox : function() {
		var _items = [];
		for (var i = 0; i < 7; i++) {
			if (!i) {
				_items.push({
					xtype : 'checkbox',
					inputValue : 0,
					boxLabel : '周天'
				});
			}
			if (i == 1) {
				_items.push({
					xtype : 'checkbox',
					inputValue : 1,
					boxLabel : '周一'
				});
			}
			if (i == 2) {
				_items.push({
					xtype : 'checkbox',
					inputValue : 2,
					boxLabel : '周二'
				});
			}
			if (i == 3) {
				_items.push({
					xtype : 'checkbox',
					inputValue : 3,
					boxLabel : '周三'
				});
			}
			if (i == 4) {
				_items.push({
					xtype : 'checkbox',
					inputValue : 4,
					boxLabel : '周四'
				});
			}
			if (i == 5) {
				_items.push({
					xtype : 'checkbox',
					inputValue : 5,
					boxLabel : '周五'
				});
			}
			if (i == 6) {
				_items.push({
					xtype : 'checkbox',
					inputValue : 6,
					boxLabel : '周六'
				});
			}
		}
		return _items;
	},
	getAllChecked : function() {
		var me = this, chk = [], getChecked = function(items) {
			if (!Ext.isEmpty(items)) {
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					if (item.checked) {
						chk.push(item.inputValue);
					}
				}
			}
		};
		var rdo = this.down('#rdoWeek').checked;
		if (rdo) {
			return '*';
		} else {
			getChecked(me.down('#self').items.items);
			return chk.length > 0 ? chk : false;
		}
	}
});