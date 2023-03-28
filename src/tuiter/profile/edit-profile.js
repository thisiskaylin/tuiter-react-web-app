import React from "react";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router";
import {editProfile} from "../reducers/profile-reducer";

const EditProfile = () => {
    const profile = useSelector((state) => state.profile);

    const[userProfile, saveProfile] = useState(profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveChangeHandler = () => {
        dispatch(editProfile(userProfile));
        navigate("/tuiter/profile");
    }

    const nameChangeHandler = (event) => {
        const name = event.target.value;
        const [firstName, lastName] = name.split(" ");
        saveProfile({
            ...userProfile,
            firstName: firstName,
            lastName: lastName,
        })
    }


    return(
        <div className="container border border-gray ps-0 pe-0">

            <div className="row d-flex align-content-center">
                <div className="fw-bolder mt-2 mb-2 ms-3">
                    <Link style={{color: 'black'}} to={'/tuiter/profile'}>
                        <i className="bi bi-x-lg me-4"></i>
                    </Link>
                    Edit Profile
                    <button onClick={saveChangeHandler} className="btn btn-dark rounded-pill btn-sm  ps-3 pe-3 float-end me-4">
                        Save
                    </button>
                </div>
            </div>

            <img className="img-fluid ms-0" src={profile.bannerPicture}/>

            <div className="ms-3 me-3 mb-3">
                <img className="rounded-circle border border-5 border-light mb-2"
                     src={profile.profilePicture}
                     style={{width: "25%", marginTop: "-15%"}}/>

                <div className="form-floating mb-3">
                    <input onChange={nameChangeHandler} type="text" className="form-control border border-gray"
                        id="1"
                           defaultValue={profile.firstName + " " + profile.lastName}/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea onChange={(e) =>
                        saveProfile({
                            ...userProfile,
                            bio:e.target.value
                        })
                    } className="form-control border border-gray"
                        id="bio"
                              defaultValue={profile.bio}
                        style={{height: "100px"}}/>
                    <label>Bio</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) =>
                        saveProfile({
                            ...userProfile,
                            location:e.target.value
                        })
                    } type="text" className="form-control border border-gray"
                        id="location"
                           defaultValue={profile.location}/>
                    <label>Location</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) =>
                        saveProfile({
                            ...userProfile,
                            website:e.target.value
                        })
                    } type="text" className="form-control border border-gray"
                        id="website"
                           defaultValue={profile.website}/>
                    <label>Website</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="Birth date" className="form-label gray">Birth date</label>
                    <input onChange={(e) =>
                        saveProfile({
                            ...userProfile,
                            dateOfBirth:e.target.value
                        })
                    } type="text" className="form-control" id="Birth date" defaultValue={profile.dateOfBirth}

                    />
                </div>
                <div className="d-flex justify-content-between">
                    <p class="fw-light">Switch to professional</p>
                    <i className="bi bi-caret-right"></i>
                </div>
            </div>

        </div>
    );
}
export default EditProfile;