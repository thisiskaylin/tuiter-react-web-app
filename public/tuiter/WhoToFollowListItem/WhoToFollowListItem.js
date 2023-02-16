const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2 col-xl-2 col-lg-2">
                    <img src=${who.avatarIcon} class="wd-right-img">
                </div>
                <div class="col-7 col-xl-7 col-lg-6">
                    <div class="text-nowrap">${who.userName} <i class="fas fa-check-circle"></i></div>
                        <small class="text-muted text-nowrap">${who.userHandle}</small>
                    </div>
                <div class="col-3 col-xl-3 col-lg-4">
                     <button type="button" class="btn btn-primary" style="font-size: 15px">Follow</button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;
