import React from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);

    // const getDateOfBirth = (dateOfBirth) => {
    //     let dobDates = dateOfBirth.split('/')
    //     let month = dobDates[0]
    //     let date = dobDates[1]
    //     let year = dobDates[2]
    //     return month + "/" + date + "/" + year
    // }

    return (
        <div className="container border border-gray ps-0 pe-0">

            <div className="d-flex align-items-center">
                <div className="ms-3">
                    <Link style={{color: 'black'}} to={'/tuiter'}>
                        <i className=" fa-2x bi bi-arrow-left"/>
                    </Link>
                </div>
                <div className={"ms-5"}>
                    <div className="fw-bold fs-5">
                        {profile.firstName} {profile.lastName}
                    </div>
                    <div className="small fw-light">
                        6,114 Tweets
                    </div>
                </div>
            </div>

            <img class="img-fluid ms-0" src={profile.bannerPicture}/>

            <div className="ms-3 me-3 mb-3">
                <div className="d-flex align-items-center">
                    <div>
                        <img className="rounded-circle border border-5 border-light"
                            src={profile.profilePicture}
                            style={{width: "30%", marginTop: "-18%"}}/>
                    </div>
                    <div>
                        <Link to={'/tuiter/edit-profile'}>
                            <button
                                className="btn btn-outline-secondary rounded-pill fw-bold text-nowrap">
                                <span class="text-black">Edit profile</span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="mt-3 fw-bolder fs-5">{profile.firstName} {profile.lastName}</div>
                <p className="small fw-light">{profile.handle}</p>
                <p>{profile.bio} <a href={profile.website}>{profile.website}</a></p>

                <div className="d-flex flex-row mb-3">
                    <div className="text-secondary me-3"><i className="bi bi-geo-alt"></i> {profile.location}</div>
                    <div className="text-secondary me-3"><i className="bi bi-balloon"></i> Born {profile.dateOfBirth}</div>
                    <div className="text-secondary me-3"><i className="bi bi-calendar3"></i> Joined {profile.dateJoined}</div>
                </div>

                <div className="d-flex flex-row">
                    <div className="me-3">
                        <strong>{profile.followingCount} </strong><span className="text-secondary">Following</span>
                    </div>
                    <div>
                        <strong>{profile.followersCount} </strong><span className="text-secondary">Followers</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileComponent;
