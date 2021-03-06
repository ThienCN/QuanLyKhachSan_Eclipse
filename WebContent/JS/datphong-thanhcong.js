$(document).ready(function () {
	
	var phongdon = 0, phongdoi = 0, phongtt = 0;
    var tiendon = 0, tiendoi = 0, tientt = 0;
	
	$.ajax({
    	type: "POST", //method
        url: "KD_ThongTinDatPhong",
        dataType: "json",
        success: function (result) {
        	//Lấy size của list số phòng trống theo từng loại phòng được trả về
            var n = Object.keys(result).length;
            
            var ngayNhan = new Date(result[0].ngayNhanPhong);
            dayNhan = ngayNhan.getDate();
            monthNhan = ngayNhan.getMonth() + 1;
            yearNhan = ngayNhan.getFullYear();
            
            var ngayTra = new Date(result[0].ngayTraPhong);
            dayTra = ngayTra.getDate();
            monthTra = ngayTra.getMonth() + 1;
            yearTra = ngayTra.getFullYear()
            
            ngaynhanphong=[yearNhan, monthNhan, dayNhan].join('/');
            ngaytraphong=[yearTra, monthTra, dayTra].join('/');
            
            if(n>0){
            	for(i=0; i<n; i++){
            		if(result[i].maLoaiPhong == 1){
            			phongdon= phongdon + parseInt(result[i].soPhong);
            			tiendon+=result[i].tienCoc;
            		}
            		if(result[i].maLoaiPhong == 2){
            			phongdoi= phongdoi + parseInt(result[i].soPhong);
            			tiendoi+=result[i].tienCoc;
            		}
            		if(result[i].maLoaiPhong == 3){
            			phongtt= phongtt + parseInt(result[i].soPhong);
            			tientt+=result[i].tienCoc;
            		}
            	}
            	
            	if(phongdon>0){
	            	$("#table-products > tbody:last").append(
	            			
	                		$('<tr>').append(
	                				$('<td>').text("Phòng đơn")
	                				).append(
	                				$('<td>').text(phongdon)
	                				).append(
	                				$('<td>').text(tiendon * 10)
	                				).append(
	                				$('<td>').text([dayNhan, monthNhan, yearNhan].join('/'))
	                				).append(
	                				$('<td>').text([dayTra, monthTra, yearTra].join('/'))
	                				)
	                	)
            	}
            	if(phongdoi>0){
	            	$("#table-products > tbody:last").append(
	            			
	                		$('<tr>').append(
	                				$('<td>').text("Phòng đôi")
	                				).append(
	                				$('<td>').text(phongdoi)
	                				).append(
	                				$('<td>').text(tiendoi * 10)
	                				).append(
	                				$('<td>').text([dayNhan, monthNhan, yearNhan].join('/'))
	                				).append(
	                				$('<td>').text([dayTra, monthTra, yearTra].join('/'))
	                				)
	                	)
            	}
            	if(phongtt>0){
	            	$("#table-products > tbody:last").append(
	            			
	                		$('<tr>').append(
	                				$('<td>').text("Phòng tập thể")
	                				).append(
	                				$('<td>').text(phongtt)
	                				).append(
	                				$('<td>').text(tientt * 10)
	                				).append(
	                				$('<td>').text([dayNhan, monthNhan, yearNhan].join('/'))
	                				).append(
	                				$('<td>').text([dayTra, monthTra, yearTra].join('/'))
	                				)
	                	)
            	}
            }
            else
        	{
            	console.log("n<0");
        	}
            
            $("#tongtien").text("  " + (parseFloat(tiendon) + parseFloat(tiendoi) + parseFloat(tientt)) * 10 + " USD");      
        }
    });
});