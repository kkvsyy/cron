/**
 * @docauthor qiaoyongjun <qiaoyongjun@126.com、qiaoyongjun@gmail.com>
 * 秒和分钟的自定义设置，0-59
 */
Ext.define('CEB.form.Z2FN', {
	extend : 'Ext.panel.Panel',
	layout : {
		type : 'vbox'
	},
	defaults : {
		layout : {
			type : 'hbox'
		},
		style : {
			margin : '5px'
		},
		border : false
	},
	initComponent : function() {
		var me = this, _items = [], _items1 = [], _items2 = [], _items3 = [];
		for (var i = 0; i < 20; i++) {
			_items1.push({
				xtype : 'checkbox',
				boxLabel : i + '',
				inputValue : i + ''
			});
		}
		_items.push({
			xtype : 'panel',
			itemId : 'checkbox1',
			defaults : {
				style : {
					margin : '6.5px'
				}
			},
			items : _items1
		});
		for (var i = 20; i < 40; i++) {
			_items2.push({
				xtype : 'checkbox',
				boxLabel : i + '',
				inputValue : i + ''
			});
		}
		_items.push({
			xtype : 'panel',
			itemId : 'checkbox2',
			defaults : {
				style : {
					margin : '5px'
				}
			},
			items : _items2
		});
		for (var i = 40; i < 60; i++) {
			_items3.push({
				xtype : 'checkbox',
				boxLabel : i + '',
				inputValue : i + ''
			});
		}
		_items.push({
			xtype : 'panel',
			itemId : 'checkbox3',
			defaults : {
				style : {
					margin : '5px'
				}
			},
			items : _items3
		});
		me.items = _items;
		me.callParent();
	},
	afterRender : function() {
		var me = this;
		// 默认时自定义不可用
		this.setAllCheckBoxStatus(true);
		me.callParent();
	},
	getAllChecked : function() {
		var me = this,chk = [], getChecked = function(items) {
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
		getChecked(me.down('#checkbox3').items.items);
		return chk.length>0 ? chk : false;
	},
	setAllCheckBoxStatus : function(b) {
		this.setDisabled(b);
	}
});