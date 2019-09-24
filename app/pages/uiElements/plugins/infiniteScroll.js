var appInfiniteScroll = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Scroll</h2>
				<small class="text-muted">An infinite scrolling plugin</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-sm-12">
					<div class="card">
						<div class="card-header">
							<strong>Infinite Scroll</strong>
						</div>
						<div class="list list-row">
							<div class="jscroll-inner">
								<div class="list-item" data-id="15">
									<div>
										<a href="#">
											<span class="w-48 avatar gd-success">J</span>
										</a>
									</div>
									<div class="flex">
										<a href="#" class="item-author text-color text-muted">Jean Armstrong</a>
										<div class="item-feed h-2x">Fun project from this weekend. Both computer replicas are fully functional</div>
									</div>
									<div class="no-wrap">
										<div class="item-date text-muted text-sm d-none d-md-block">03/12 18</div>
									</div>
								</div>
								<div class="list-item" data-id="12">
									<div>
										<a href="#">
											<span class="w-48 avatar gd-info">A</span>
										</a>
									</div>
									<div class="flex">
										<a href="#" class="item-author text-color text-muted">Alan Richards</a>
										<div class="item-feed h-2x">
											<a href="#">Support</a> team updated the status
										</div>
									</div>
									<div class="no-wrap">
										<div class="item-date text-muted text-sm d-none d-md-block">5 hours ago</div>
									</div>
								</div>
								<div class="list-item" data-id="17">
									<div>
										<a href="#">
											<span class="w-48 avatar gd-warning">A</span>
										</a>
									</div>
									<div class="flex">
										<a href="#" class="item-author text-color text-muted">Alan Mendez</a>
										<div class="item-feed h-2x">Alibaba made a smart screen 
											<a href="#">@Alibaba</a>
										</div>
									</div>
									<div class="no-wrap">
										<div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
									</div>
								</div>
								<div class="list-item" data-id="11">
									<div>
										<a href="#">
											<span class="w-48 avatar gd-info">K</span>
										</a>
									</div>
									<div class="flex">
										<a href="#" class="item-author text-color text-muted">Kenneth Pierce</a>
										<div class="item-feed h-2x">Prepare the documentation for the 
											<a href="#">Fitness app</a>
										</div>
									</div>
									<div class="no-wrap">
										<div class="item-date text-muted text-sm d-none d-md-block">20 minutes ago</div>
									</div>
								</div>
								<div class="list-item" data-id="4">
									<div>
										<a href="#">
											<span class="w-48 avatar gd-success">
												<img src="../assets/img/a4.jpg" alt=".">
												</span>
											</a>
										</div>
										<div class="flex">
											<a href="#" class="item-author text-color text-muted">Billy Johnston</a>
											<div class="item-feed h-2x">Big News! Introducing 
												<a href="#">NextUX</a> Enterprise 2.1 - additional #Windows Server support
											</div>
										</div>
										<div class="no-wrap">
											<div class="item-date text-muted text-sm d-none d-md-block">2 hours ago</div>
										</div>
									</div>
									<div class="list-item" data-id="8">
										<div>
											<a href="#">
												<span class="w-48 avatar gd-success">
													<img src="../assets/img/a8.jpg" alt=".">
													</span>
												</a>
											</div>
											<div class="flex">
												<a href="#" class="item-author text-color text-muted">Lawrence Cole</a>
												<div class="item-feed h-2x">The biggest software developer conference</div>
											</div>
											<div class="no-wrap">
												<div class="item-date text-muted text-sm d-none d-md-block">02/11 18</div>
											</div>
										</div>
										<div class="list-item" data-id="3">
											<div>
												<a href="#">
													<span class="w-48 avatar gd-primary">
														<img src="../assets/img/a3.jpg" alt=".">
														</span>
													</a>
												</div>
												<div class="flex">
													<a href="#" class="item-author text-color text-muted">Jordan Stephens</a>
													<div class="item-feed h-2x">
														<a href="#">@NextUI</a> submit a ticket request
													</div>
												</div>
												<div class="no-wrap">
													<div class="item-date text-muted text-sm d-none d-md-block">1 hour ago</div>
												</div>
											</div>
											<div class="list-item" data-id="14">
												<div>
													<a href="#">
														<span class="w-48 avatar gd-warning">B</span>
													</a>
												</div>
												<div class="flex">
													<a href="#" class="item-author text-color text-muted">Benjamin Fields</a>
													<div class="item-feed h-2x">Do you know which are the popular ones? Leave a comment and get to know more from professional developers</div>
												</div>
												<div class="no-wrap">
													<div class="item-date text-muted text-sm d-none d-md-block">1 day ago</div>
												</div>
											</div>
											<div class="list-item" data-id="7">
												<div>
													<a href="#">
														<span class="w-48 avatar gd-primary">
															<img src="../assets/img/a7.jpg" alt=".">
															</span>
														</a>
													</div>
													<div class="flex">
														<a href="#" class="item-author text-color text-muted">Frank Kelley</a>
														<div class="item-feed h-2x">From design to dashboard, 
															<a href="#">@Dash</a> builds custom hardware according to on-site requirements
														</div>
													</div>
													<div class="no-wrap">
														<div class="item-date text-muted text-sm d-none d-md-block">21 July</div>
													</div>
												</div>
												<div class="list-item" data-id="17">
													<div>
														<a href="#">
															<span class="w-48 avatar gd-warning">H</span>
														</a>
													</div>
													<div class="flex">
														<a href="#" class="item-author text-color text-muted">Helen Valdez</a>
														<div class="item-feed h-2x">AI will deliver adaptive learning processes in assessments &amp; digital textbooks to personalize learning</div>
													</div>
													<div class="no-wrap">
														<div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
													</div>
												</div>
												<div class="jscroll-added">
													<div class="list-item" data-id="1">
														<div>
															<a href="#">
																<span class="w-48 avatar gd-primary">
																	<img src="../assets/img/a1.jpg" alt=".">
																	</span>
																</a>
															</div>
															<div class="flex">
																<a href="#" class="item-author text-color text-muted">Joyce McCoy</a>
																<div class="item-feed h-2x">
																	<a href="#">@WordPress</a> How To Get Started With WordPress
																</div>
															</div>
															<div class="no-wrap">
																<div class="item-date text-muted text-sm d-none d-md-block">20 minutes ago</div>
															</div>
														</div>
														<div class="list-item" data-id="6">
															<div>
																<a href="#">
																	<span class="w-48 avatar gd-danger">
																		<img src="../assets/img/a6.jpg" alt=".">
																		</span>
																	</a>
																</div>
																<div class="flex">
																	<a href="#" class="item-author text-color text-muted">Wayne Gray</a>
																	<div class="item-feed h-2x">Just saw this on the 
																		<a href="#">@eBay</a> dashboard, dude is an absolute unit.
																	</div>
																</div>
																<div class="no-wrap">
																	<div class="item-date text-muted text-sm d-none d-md-block">1 Week ago</div>
																</div>
															</div>
															<div class="list-item" data-id="4">
																<div>
																	<a href="#">
																		<span class="w-48 avatar gd-success">
																			<img src="../assets/img/a4.jpg" alt=".">
																			</span>
																		</a>
																	</div>
																	<div class="flex">
																		<a href="#" class="item-author text-color text-muted">Billy Johnston</a>
																		<div class="item-feed h-2x">Big News! Introducing 
																			<a href="#">NextUX</a> Enterprise 2.1 - additional #Windows Server support
																		</div>
																	</div>
																	<div class="no-wrap">
																		<div class="item-date text-muted text-sm d-none d-md-block">2 hours ago</div>
																	</div>
																</div>
																<div class="list-item" data-id="13">
																	<div>
																		<a href="#">
																			<span class="w-48 avatar gd-primary">L</span>
																		</a>
																	</div>
																	<div class="flex">
																		<a href="#" class="item-author text-color text-muted">Lisa Chapman</a>
																		<div class="item-feed h-2x">Thanks! Awesome to see good support on Twitter</div>
																	</div>
																	<div class="no-wrap">
																		<div class="item-date text-muted text-sm d-none d-md-block">3 weeks ago</div>
																	</div>
																</div>
																<div class="list-item" data-id="8">
																	<div>
																		<a href="#">
																			<span class="w-48 avatar gd-success">
																				<img src="../assets/img/a8.jpg" alt=".">
																				</span>
																			</a>
																		</div>
																		<div class="flex">
																			<a href="#" class="item-author text-color text-muted">Lawrence Cole</a>
																			<div class="item-feed h-2x">The biggest software developer conference</div>
																		</div>
																		<div class="no-wrap">
																			<div class="item-date text-muted text-sm d-none d-md-block">02/11 18</div>
																		</div>
																	</div>
																</div>
																<div class="jscroll-added">
																	<div class="list-item" data-id="1">
																		<div>
																			<a href="#">
																				<span class="w-48 avatar gd-primary">
																					<img src="../assets/img/a1.jpg" alt=".">
																					</span>
																				</a>
																			</div>
																			<div class="flex">
																				<a href="#" class="item-author text-color text-muted">Joyce McCoy</a>
																				<div class="item-feed h-2x">
																					<a href="#">@WordPress</a> How To Get Started With WordPress
																				</div>
																			</div>
																			<div class="no-wrap">
																				<div class="item-date text-muted text-sm d-none d-md-block">20 minutes ago</div>
																			</div>
																		</div>
																		<div class="list-item" data-id="6">
																			<div>
																				<a href="#">
																					<span class="w-48 avatar gd-danger">
																						<img src="../assets/img/a6.jpg" alt=".">
																						</span>
																					</a>
																				</div>
																				<div class="flex">
																					<a href="#" class="item-author text-color text-muted">Wayne Gray</a>
																					<div class="item-feed h-2x">Just saw this on the 
																						<a href="#">@eBay</a> dashboard, dude is an absolute unit.
																					</div>
																				</div>
																				<div class="no-wrap">
																					<div class="item-date text-muted text-sm d-none d-md-block">1 Week ago</div>
																				</div>
																			</div>
																			<div class="list-item" data-id="4">
																				<div>
																					<a href="#">
																						<span class="w-48 avatar gd-success">
																							<img src="../assets/img/a4.jpg" alt=".">
																							</span>
																						</a>
																					</div>
																					<div class="flex">
																						<a href="#" class="item-author text-color text-muted">Billy Johnston</a>
																						<div class="item-feed h-2x">Big News! Introducing 
																							<a href="#">NextUX</a> Enterprise 2.1 - additional #Windows Server support
																						</div>
																					</div>
																					<div class="no-wrap">
																						<div class="item-date text-muted text-sm d-none d-md-block">2 hours ago</div>
																					</div>
																				</div>
																				<div class="list-item" data-id="13">
																					<div>
																						<a href="#">
																							<span class="w-48 avatar gd-primary">L</span>
																						</a>
																					</div>
																					<div class="flex">
																						<a href="#" class="item-author text-color text-muted">Lisa Chapman</a>
																						<div class="item-feed h-2x">Thanks! Awesome to see good support on Twitter</div>
																					</div>
																					<div class="no-wrap">
																						<div class="item-date text-muted text-sm d-none d-md-block">3 weeks ago</div>
																					</div>
																				</div>
																				<div class="list-item" data-id="8">
																					<div>
																						<a href="#">
																							<span class="w-48 avatar gd-success">
																								<img src="../assets/img/a8.jpg" alt=".">
																								</span>
																							</a>
																						</div>
																						<div class="flex">
																							<a href="#" class="item-author text-color text-muted">Lawrence Cole</a>
																							<div class="item-feed h-2x">The biggest software developer conference</div>
																						</div>
																						<div class="no-wrap">
																							<div class="item-date text-muted text-sm d-none d-md-block">02/11 18</div>
																						</div>
																					</div>
																				</div>
																				<div class="jscroll-added">
																					<div class="list-item" data-id="1">
																						<div>
																							<a href="#">
																								<span class="w-48 avatar gd-primary">
																									<img src="../assets/img/a1.jpg" alt=".">
																									</span>
																								</a>
																							</div>
																							<div class="flex">
																								<a href="#" class="item-author text-color text-muted">Joyce McCoy</a>
																								<div class="item-feed h-2x">
																									<a href="#">@WordPress</a> How To Get Started With WordPress
																								</div>
																							</div>
																							<div class="no-wrap">
																								<div class="item-date text-muted text-sm d-none d-md-block">20 minutes ago</div>
																							</div>
																						</div>
																						<div class="list-item" data-id="6">
																							<div>
																								<a href="#">
																									<span class="w-48 avatar gd-danger">
																										<img src="../assets/img/a6.jpg" alt=".">
																										</span>
																									</a>
																								</div>
																								<div class="flex">
																									<a href="#" class="item-author text-color text-muted">Wayne Gray</a>
																									<div class="item-feed h-2x">Just saw this on the 
																										<a href="#">@eBay</a> dashboard, dude is an absolute unit.
																									</div>
																								</div>
																								<div class="no-wrap">
																									<div class="item-date text-muted text-sm d-none d-md-block">1 Week ago</div>
																								</div>
																							</div>
																							<div class="list-item" data-id="4">
																								<div>
																									<a href="#">
																										<span class="w-48 avatar gd-success">
																											<img src="../assets/img/a4.jpg" alt=".">
																											</span>
																										</a>
																									</div>
																									<div class="flex">
																										<a href="#" class="item-author text-color text-muted">Billy Johnston</a>
																										<div class="item-feed h-2x">Big News! Introducing 
																											<a href="#">NextUX</a> Enterprise 2.1 - additional #Windows Server support
																										</div>
																									</div>
																									<div class="no-wrap">
																										<div class="item-date text-muted text-sm d-none d-md-block">2 hours ago</div>
																									</div>
																								</div>
																								<div class="list-item" data-id="13">
																									<div>
																										<a href="#">
																											<span class="w-48 avatar gd-primary">L</span>
																										</a>
																									</div>
																									<div class="flex">
																										<a href="#" class="item-author text-color text-muted">Lisa Chapman</a>
																										<div class="item-feed h-2x">Thanks! Awesome to see good support on Twitter</div>
																									</div>
																									<div class="no-wrap">
																										<div class="item-date text-muted text-sm d-none d-md-block">3 weeks ago</div>
																									</div>
																								</div>
																								<div class="list-item" data-id="8">
																									<div>
																										<a href="#">
																											<span class="w-48 avatar gd-success">
																												<img src="../assets/img/a8.jpg" alt=".">
																												</span>
																											</a>
																										</div>
																										<div class="flex">
																											<a href="#" class="item-author text-color text-muted">Lawrence Cole</a>
																											<div class="item-feed h-2x">The biggest software developer conference</div>
																										</div>
																										<div class="no-wrap">
																											<div class="item-date text-muted text-sm d-none d-md-block">02/11 18</div>
																										</div>
																									</div>
																									<div class="text-center p-4">
																										<a href="ui.scroll.items.html" class="btn btn-sm white jscroll-next no-ajax">Show More</a>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
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