/**
 * @docauthor qiaoyongjun <qiaoyongjun@126.com、qiaoyongjun@gmail.com>
 * 1年12个月
 */
Ext.define('CEB.form.MONTH', {
	extend : 'Ext.panel.Panel',
	layout : {
		type : 'vbox'
	},
	defaults : {
		style : {
			margin : '5px'
		},
		border : false
	},
	initComponent : function() {
		var me = this, _items1 = [], _items2 = [];
		for (var i = 1; i < 7; i++) {
			_items1.push({
				xtype : 'checkbox',
				boxLabel : i + '',
				inputValue : i + ''
			});
		}
		for (var i = 7; i <= 12; i++) {
			_items2.push({
				xtype : 'checkbox',
				boxLabel : i + '',
				inputValue : i + ''
			});
		}
		me.items = [ {
			xtype : 'panel',
			itemId : 'checkbox1',
			layout : {
				type : 'hbox'
			},
			defaults : {
				style : {
					margin : '7px'
				}
			},
			items : _items1
		}, {
			xtype : 'panel',
			itemId : 'checkbox2',
			layout : {
				type : 'hbox'
			},
			defaults : {
				style : {
					margin : '5px'
				}
			},
			items : _items2
		} ];
		me.callParent();
	},
	afterRender : function() {
		var me = this;
		me.setAllCheckBoxStatus(true);
		me.callParent();
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
		getChecked(me.down('#checkbox1').items.items);
		getChecked(me.down('#checkbox2').items.items);
		return chk.length > 0 ? chk : false;
	},
	setAllCheckBoxStatus : function(b) {
		this.setDisabled(b);
	}
});