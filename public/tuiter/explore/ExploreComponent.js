import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
                <!--search+gear container-->
                <div class="search-bar d-flex align-items-center justify-content-between">
                    <!--search container = col 11-->
                    <div class="row height col-11 justify-content-center align-items-center">
                        <div class="wd-search">
                            <i class="fa fa-search"></i>
                            <input type="text" class="form-control" placeholder="Search Twitter">
                        </div>
                    </div>
                    <!--gear container = col 1-->
                    <div class="d-flex col-1 wd-tuiter-blue">
                        <a href="explore-settings.html">
                        <i class="position-relative ms-1 wd-gear fas fa-cog" style="font-size : 30px"></i></a>
                    </div>
                </div>
                <!--floating tabs container-->
                <div class="wd-navigation-tabs">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="for-you.html">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="news.html">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="sports.html">Sports</a>
                        </li>
                        <li class="nav-item d-none d-sm-none d-md-block">
                            <a class="nav-link" href="entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                </div>
                <!--image-->
                <div class="container wd-image-text p-0">
                    <img src="space.png" class="img-fluid" alt="spacex">
                    <div class="wd-text-bottom-left">SpaceX's Starship</div>  <!--image textarea-->
                </div>
               <!-- image with overlaid text -->
               <div class="mt-2">
                  ${PostSummaryList()}
               </div>
    `);
}
export default ExploreComponent;
