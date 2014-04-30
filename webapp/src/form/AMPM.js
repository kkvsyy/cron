/**
 * @docauthor qiaoyongjun <qiaoyongjun@126.com、qiaoyongjun@gmail.com>
 * 每天24不时，按上午下午区别
 */
Ext.define('CEB.form.AMPM', {
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
		_items1.push({
			xtype : 'label',
			text : 'AM',
			margin : '10 10 0 0'
		});
		_items2.push({
			xtype : 'label',
			text : 'PM',
			margin : '10 10 0 0'
		});
		for (var i = 0; i < 12; i++) {
			_items1.push({
				xtype : 'checkbox',
				boxLabel : i + '',
				inputValue : i + ''
			});
		}
		for (var i = 12; i < 24; i++) {
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
		console.log(chk);
		return chk.length > 0 ? chk : false;
	},
	setAllCheckBoxStatus : function(b) {
		this.setDisabled(b);
		// this.down('#checkbox1').setDisabled(b);
		// this.down('#checkbox2').setDisabled(b);
	}
});