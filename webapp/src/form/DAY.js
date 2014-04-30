/**
 * @docauthor qiaoyongjun <qiaoyongjun@126.com、qiaoyongjun@gmail.com>
 * 默认1月按31天算
 */
Ext.define('CEB.form.DAY', {
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
		var me = this, _items1 = [], _items2 = [], _items3 = [];
		for (var i = 1; i < 16; i++) {
			_items1.push({
				xtype : 'checkbox',
				boxLabel : i + '',
				inputValue : i + ''
			});
		}
		for (var i = 16; i < 31; i++) {
			_items2.push({
				xtype : 'checkbox',
				boxLabel : i + '',
				inputValue : i + ''
			});
		}
		_items3.push({
			xtype : 'checkbox',
			boxLabel : 31,
			inputValue : 31
		});
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
		}, {
			xtype : 'panel',
			itemId : 'checkbox3',
			layout : {
				type : 'hbox'
			},
			defaults : {
				style : {
					margin : '5px'
				}
			},
			items : _items3
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
		getChecked(me.down('#checkbox3').items.items);
		return chk.length>0?chk:false;
	},
	setAllCheckBoxStatus : function(b) {
		this.setDisabled(b);
		// this.down('#checkbox1').setDisabled(b);
		// this.down('#checkbox2').setDisabled(b);
		// this.down('#checkbox3').setDisabled(b);
	}
});