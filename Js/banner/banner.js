// 表格
(function(){
    function m() {
        $.method("GET", "/mock/5b345279f512b5707142c022/table/table", null, {
            
        }, null, null, function(a) {
            n = a.Page;
            console.log(a)
            layui.use('table', function(){
              
              var table = layui.table;

              table.render({
                elem: '#main-table'
                ,height: 315
                ,data: a.data //开启分页
                ,cols: [[ //表头
                  {field: 'id', title: 'ID', width:80}
                  ,{field: 'username', title: '用户名', width:80}
                  ,{field: 'sex', title: '性别', width:80, sort: false}
                  ,{field: 'city', title: '城市', width:80} 
                  ,{field: 'sign', title: '签名', width: 177}
                  ,{field: 'experience', title: '积分', width: 80, sort: true}
                  ,{field: 'score', title: '评分', width: 80, sort: true}
                  ,{field: 'classify', title: '职业', width: 80}
                  ,{field: 'wealth', title: '财富', width: 135, sort: true}
                ]]
              });
            });
            // 0 < a.Count && $(".tab-item.tab-item-appr \x3e  span").html("(" + a.Count + ")")
        }, function(a) {
            // $(".appr-list \x3e ul").remove();
            // $(".appr-list .no-result").show()
        })
      }
      // m();
    
    layui.use('table', function(){
      var table = layui.table;
      table.render({
        id: '#main-table',
        elem: '#main-table'
        ,height: 315
        ,url: 'https://www.easy-mock.com/mock/5b345279f512b5707142c022/table/table' //数据接口
        ,page: true //开启分页
        ,cols: [[ //表头
          {field: 'id', title: '#', width:80, align: 'center'}
          ,{field: 'username', title: '图片', width:150, align: 'center'}
          ,{field: 'sex', title: '所属类别', width:120, align: 'center'}
          ,{field: 'city', title: '发布时间', width:120, align: 'center'} 
          ,{field: 'sign', title: '排序', width: 177, align: 'center'}
          ,{field: 'experience', title: '显示状态', width: 120, align: 'center'}
          ,{field: 'score', title: '操作', width: 180, align: 'center', toolbar: '#barDemo'}
        ]]
      });
    });
})()