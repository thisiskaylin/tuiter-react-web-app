const NavigationSidebar = (activeElement) => {
    $(document).ready(function() {
        $('#' + activeElement).addClass('active');
    });
    return(`
        <div class="list-group wd-navbar">
                    <!--leftmost column item-->
                    <a class="list-group-item" href="#">
                        <i class="fa-sharp fa-solid fa-t"></i>
                    </a>

                    <a id="ac-home" class="list-group-item" href="../HomeScreen/index.html">
                        <div class="row">
                            <div class="col-2">
                              <i class="fas fa-home"></i>
                            </div>
                            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">Home</span>
                        </div>
                    </a>

                    <a id="ac-explore" class="list-group-item" href="../explore/index.html">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-hashtag"></i>
                            </div>
                            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">Explore</span>
                        </div>
                    </a>

                    <a class="list-group-item" href="#">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-bell"></i>
                            </div>
                            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">Notification</span>
                        </div>
                    </a>

                    <a class="list-group-item" href="#">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">Messages</span>
                        </div>
                    </a>

                    <a class="list-group-item" href="#">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-bookmark"></i>
                            </div>
                            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">Bookmarks</span>
                        </div>
                    </a>

                    <a class="list-group-item" href="#">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-list"></i>
                            </div>
                            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">Lists</span>
                        </div>
                    </a>

                    <a class="list-group-item" href="#">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-user"></i>
                            </div>
                            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">Profile</span>
                        </div>
                    </a>

                    <a class="list-group-item" href="#">
                        <div class="row">
                            <div class="col-2">
                                <span class="fa-stack fa-2x" style="font-size: 7px; color: black">
                            <i class="fas fa-circle fa-stack-2x" style="color: white"></i>
                             <i class="fas fa-ellipsis-h fa-stack-1x" style="color:black"></i></span>
                            </div>
                            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">More</span>
                        </div>
                    </a>

                    <div class="d-grid mt-2">
                        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
                    </div>
            </div> <!--end of items list-->
     `);
    }
export default NavigationSidebar;