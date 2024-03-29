var appDatepicker = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Datepicker</h2>
				<small class="text-muted">A datepicker for twitter bootstrap</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-sm-6">
					<p>Basic</p>
					<input type="text" class="form-control mb-3">
						<p>Clear button</p>
						<input type="text" class="form-control mb-3">
							<p>Today button</p>
							<input type="text" class="form-control mb-3">
								<p>Auto close</p>
								<input type="text" class="form-control mb-3">
									<p>Multi date</p>
									<input type="text" class="form-control mb-3">
										<p>Calendar weeks</p>
										<input type="text" class="form-control mb-3">
											<p>Days of week disabled</p>
											<input type="text" class="form-control mb-3">
												<p>Days of week hlighted</p>
												<input type="text" class="form-control mb-3">
													<p>Date range</p>
													<div class="input-group input-daterange mb-3">
														<input type="text" class="form-control" name="start">
															<div class="input-group-prepend">
																<span class="input-group-text">to</span>
															</div>
															<input type="text" class="form-control" name="end">
															</div>
														</div>
														<div class="col-sm-6">
															<div class="card">
																<div class="card-header">
																	<strong>Calendar</strong>
																</div>
																<div class="p-1">
																	<div class="datepicker datepicker-inline">
																		<div class="datepicker-days" style="">
																			<table class="table-condensed">
																				<thead>
																					<tr>
																						<th colspan="7" class="datepicker-title" style="display: none;"></th>
																					</tr>
																					<tr>
																						<th class="prev">«</th>
																						<th colspan="5" class="datepicker-switch">September 2019</th>
																						<th class="next">»</th>
																					</tr>
																					<tr>
																						<th class="dow">Su</th>
																						<th class="dow">Mo</th>
																						<th class="dow">Tu</th>
																						<th class="dow">We</th>
																						<th class="dow">Th</th>
																						<th class="dow">Fr</th>
																						<th class="dow">Sa</th>
																					</tr>
																				</thead>
																				<tbody>
																					<tr>
																						<td class="old day" data-date="1566691200000">25</td>
																						<td class="old day" data-date="1566777600000">26</td>
																						<td class="old day" data-date="1566864000000">27</td>
																						<td class="old day" data-date="1566950400000">28</td>
																						<td class="old day" data-date="1567036800000">29</td>
																						<td class="old day" data-date="1567123200000">30</td>
																						<td class="old day" data-date="1567209600000">31</td>
																					</tr>
																					<tr>
																						<td class="day" data-date="1567296000000">1</td>
																						<td class="day" data-date="1567382400000">2</td>
																						<td class="day" data-date="1567468800000">3</td>
																						<td class="day" data-date="1567555200000">4</td>
																						<td class="day" data-date="1567641600000">5</td>
																						<td class="day" data-date="1567728000000">6</td>
																						<td class="day" data-date="1567814400000">7</td>
																					</tr>
																					<tr>
																						<td class="day" data-date="1567900800000">8</td>
																						<td class="day" data-date="1567987200000">9</td>
																						<td class="day" data-date="1568073600000">10</td>
																						<td class="day" data-date="1568160000000">11</td>
																						<td class="day" data-date="1568246400000">12</td>
																						<td class="day" data-date="1568332800000">13</td>
																						<td class="day" data-date="1568419200000">14</td>
																					</tr>
																					<tr>
																						<td class="day" data-date="1568505600000">15</td>
																						<td class="day" data-date="1568592000000">16</td>
																						<td class="day" data-date="1568678400000">17</td>
																						<td class="day" data-date="1568764800000">18</td>
																						<td class="day" data-date="1568851200000">19</td>
																						<td class="day" data-date="1568937600000">20</td>
																						<td class="day" data-date="1569024000000">21</td>
																					</tr>
																					<tr>
																						<td class="day" data-date="1569110400000">22</td>
																						<td class="day" data-date="1569196800000">23</td>
																						<td class="day" data-date="1569283200000">24</td>
																						<td class="day" data-date="1569369600000">25</td>
																						<td class="day" data-date="1569456000000">26</td>
																						<td class="day" data-date="1569542400000">27</td>
																						<td class="day" data-date="1569628800000">28</td>
																					</tr>
																					<tr>
																						<td class="day" data-date="1569715200000">29</td>
																						<td class="day" data-date="1569801600000">30</td>
																						<td class="new day" data-date="1569888000000">1</td>
																						<td class="new day" data-date="1569974400000">2</td>
																						<td class="new day" data-date="1570060800000">3</td>
																						<td class="new day" data-date="1570147200000">4</td>
																						<td class="new day" data-date="1570233600000">5</td>
																					</tr>
																				</tbody>
																				<tfoot>
																					<tr>
																						<th colspan="7" class="today" style="display: none;">Today</th>
																					</tr>
																					<tr>
																						<th colspan="7" class="clear" style="display: none;">Clear</th>
																					</tr>
																				</tfoot>
																			</table>
																		</div>
																		<div class="datepicker-months" style="display: none;">
																			<table class="table-condensed">
																				<thead>
																					<tr>
																						<th colspan="7" class="datepicker-title" style="display: none;"></th>
																					</tr>
																					<tr>
																						<th class="prev">«</th>
																						<th colspan="5" class="datepicker-switch">2019</th>
																						<th class="next">»</th>
																					</tr>
																				</thead>
																				<tbody>
																					<tr>
																						<td colspan="7">
																							<span class="month">Jan</span>
																							<span class="month">Feb</span>
																							<span class="month">Mar</span>
																							<span class="month">Apr</span>
																							<span class="month">May</span>
																							<span class="month">Jun</span>
																							<span class="month">Jul</span>
																							<span class="month">Aug</span>
																							<span class="month focused">Sep</span>
																							<span class="month">Oct</span>
																							<span class="month">Nov</span>
																							<span class="month">Dec</span>
																						</td>
																					</tr>
																				</tbody>
																				<tfoot>
																					<tr>
																						<th colspan="7" class="today" style="display: none;">Today</th>
																					</tr>
																					<tr>
																						<th colspan="7" class="clear" style="display: none;">Clear</th>
																					</tr>
																				</tfoot>
																			</table>
																		</div>
																		<div class="datepicker-years" style="display: none;">
																			<table class="table-condensed">
																				<thead>
																					<tr>
																						<th colspan="7" class="datepicker-title" style="display: none;"></th>
																					</tr>
																					<tr>
																						<th class="prev">«</th>
																						<th colspan="5" class="datepicker-switch">2010-2019</th>
																						<th class="next">»</th>
																					</tr>
																				</thead>
																				<tbody>
																					<tr>
																						<td colspan="7">
																							<span class="year old">2009</span>
																							<span class="year">2010</span>
																							<span class="year">2011</span>
																							<span class="year">2012</span>
																							<span class="year">2013</span>
																							<span class="year">2014</span>
																							<span class="year">2015</span>
																							<span class="year">2016</span>
																							<span class="year">2017</span>
																							<span class="year">2018</span>
																							<span class="year focused">2019</span>
																							<span class="year new">2020</span>
																						</td>
																					</tr>
																				</tbody>
																				<tfoot>
																					<tr>
																						<th colspan="7" class="today" style="display: none;">Today</th>
																					</tr>
																					<tr>
																						<th colspan="7" class="clear" style="display: none;">Clear</th>
																					</tr>
																				</tfoot>
																			</table>
																		</div>
																		<div class="datepicker-decades" style="display: none;">
																			<table class="table-condensed">
																				<thead>
																					<tr>
																						<th colspan="7" class="datepicker-title" style="display: none;"></th>
																					</tr>
																					<tr>
																						<th class="prev">«</th>
																						<th colspan="5" class="datepicker-switch">2000-2090</th>
																						<th class="next">»</th>
																					</tr>
																				</thead>
																				<tbody>
																					<tr>
																						<td colspan="7">
																							<span class="decade old">1990</span>
																							<span class="decade">2000</span>
																							<span class="decade focused">2010</span>
																							<span class="decade">2020</span>
																							<span class="decade">2030</span>
																							<span class="decade">2040</span>
																							<span class="decade">2050</span>
																							<span class="decade">2060</span>
																							<span class="decade">2070</span>
																							<span class="decade">2080</span>
																							<span class="decade">2090</span>
																							<span class="decade new">2100</span>
																						</td>
																					</tr>
																				</tbody>
																				<tfoot>
																					<tr>
																						<th colspan="7" class="today" style="display: none;">Today</th>
																					</tr>
																					<tr>
																						<th colspan="7" class="clear" style="display: none;">Clear</th>
																					</tr>
																				</tfoot>
																			</table>
																		</div>
																		<div class="datepicker-centuries" style="display: none;">
																			<table class="table-condensed">
																				<thead>
																					<tr>
																						<th colspan="7" class="datepicker-title" style="display: none;"></th>
																					</tr>
																					<tr>
																						<th class="prev">«</th>
																						<th colspan="5" class="datepicker-switch">2000-2900</th>
																						<th class="next">»</th>
																					</tr>
																				</thead>
																				<tbody>
																					<tr>
																						<td colspan="7">
																							<span class="century old">1900</span>
																							<span class="century focused">2000</span>
																							<span class="century">2100</span>
																							<span class="century">2200</span>
																							<span class="century">2300</span>
																							<span class="century">2400</span>
																							<span class="century">2500</span>
																							<span class="century">2600</span>
																							<span class="century">2700</span>
																							<span class="century">2800</span>
																							<span class="century">2900</span>
																							<span class="century new">3000</span>
																						</td>
																					</tr>
																				</tbody>
																				<tfoot>
																					<tr>
																						<th colspan="7" class="today" style="display: none;">Today</th>
																					</tr>
																					<tr>
																						<th colspan="7" class="clear" style="display: none;">Clear</th>
																					</tr>
																				</tfoot>
																			</table>
																		</div>
																	</div>
																</div>
															</div>
															<p>
																<strong>Daterangepicker</strong>
															</p>
															<input type="text" class="btn btn-primary">
															</div>
														</div>
													</div>
												</div>
											</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}