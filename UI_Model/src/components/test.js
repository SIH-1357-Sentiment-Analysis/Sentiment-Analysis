import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "./InputControl";
import { auth } from "../firebase";
import styles from "./Signup.module.css";

function Details() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [socialMedia, setSocialMedia] = useState({
    instagram: { hasAccount: false, username: "" },
    twitter: { hasAccount: false, username: "" },
    snapchat: { hasAccount: false, username: "" },
    telegram: { hasAccount: false, username: "" },
    facebook: { hasAccount: false, username: "" },
    whatsapp: { hasAccount: false, number: "" },
  });

  const [userDetails, setUserDetails] = useState({
    topicsOfInterest: "",
    preferredLanguage: "",
    location: "",
    demographics: "",
    age: "",
    gender: "",
    politicalAffiliation: "",
    dataSharingPreferences: "",
    notificationPreferences: "",
    expertise: "",
    uiPreferences: "",
    dataPrivacyConsent: "",
    feedback: "",
    trainingInterest: "",
    supportNeeds: "",
    // Additional user details
    interests: "",
    favoriteBooks: "",
    favoriteMovies: "",
    hobbies: "",
    jobTitle: "",
    educationLevel: "",
    incomeRange: "",
    // Add more fields as needed
  });

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    // Process and store user details here

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>
          One More Step To Go !!! Please kindly fill the Details
        </h1>

        {/* Table Layout for Questions and Inputs */}
        <table className={styles.tableLayout}>
          <tbody>
            {/* Social Media Platforms */}
            <tr>
              <td>Do You Have Instagram?</td>
              <td>
                <label>
                  yes
                  <input
                    type="radio"
                    name="instagram"
                    value="yes"
                    onClick={() =>
                      setSocialMedia({
                        ...socialMedia,
                        instagram: { hasAccount: true },
                      })
                    }
                  />
                </label>
                <label>
                  no
                  <input
                    type="radio"
                    name="instagram"
                    value="no"
                    onClick={() =>
                      setSocialMedia({
                        ...socialMedia,
                        instagram: { hasAccount: false },
                      })
                    }
                /></label>
              </td>
            </tr>
            {socialMedia.instagram.hasAccount && (
              <tr>
                <td>Instagram Username</td>
                <td>
                  <InputControl
                    label="Instagram Username"
                    placeholder="Enter your Instagram username"
                    onChange={(event) =>
                      setSocialMedia({
                        ...socialMedia,
                        instagram: {
                          ...socialMedia.instagram,
                          username: event.target.value,
                        },
                      })
                    }
                  />
                </td>
              </tr>)
            }

            {/* Similar sections for other social media platforms... */}
            {/* Twitter */}
            <tr>
              <td>Do You Have Twitter?</td>
              <td>
                <label>
                  yes
                  <input
                    type="radio"
                    name="twitter"
                    value="yes"
                    onClick={() =>
                      setSocialMedia({
                        ...socialMedia,
                        twitter: { hasAccount: true },
                      })
                    }
                  />
                </label>
                <label>
                  no
                  <input
                    type="radio"
                    name="twitter"
                    value="no"
                    onClick={() =>
                      setSocialMedia({
                        ...socialMedia,
                        twitter: { hasAccount: false },
                      })
                    }
                  /></label>
              </td>
            </tr>
            {socialMedia.twitter.hasAccount && (
              <tr>
                <td>Twitter Username</td>
                <td>
                  <InputControl
                    label="Twitter Username"
                    placeholder="Enter your Twitter username"
                    onChange={(event) =>
                      setSocialMedia({
                        ...socialMedia,
                        twitter: {
                          ...socialMedia.twitter,
                          username: event.target.value,
                        },
                      })
                    }
                  />
                </td>
              </tr>)
            }

            {/* Snapchat */}
            <tr>
              <td>Do You Have SnapChat?</td>
              <td>
                <label>
                  yes
                  <input
                    type="radio"
                    name="snapchat"
                    value="yes"
                    onClick={() =>
                      setSocialMedia({
                        ...socialMedia,
                        snapchat: { hasAccount: true },
                      })
                    }
                  />
                </label>
                <label>
                  no
                  <input
                    type="radio"
                    name="snapchat"
                    value="no"
                    onClick={() =>
                      setSocialMedia({
                        ...socialMedia,
                        snapchat: { hasAccount: false },
                      })
                    }
                  /></label>
              </td>
            </tr>
            {socialMedia.snapchat.hasAccount && (
              <tr>
                <td>Snapchat Username</td>
                <td>
                  <InputControl
                    label="Snapchat Username"
                    placeholder="Enter your Snapchat username"
                    onChange={(event) =>
                      setSocialMedia({
                        ...socialMedia,
                        snapchat: {
                          ...socialMedia.snapchat,
                          username: event.target.value,
                        },
                      })
                    }
                  />
                </td>
              </tr>)
            }

            {/* Telegram */}
            <tr>
              <td>Do You Have Telegram?</td>
              <td>
                <label>
                  yes
                  <input
                    type="radio"
                    name="telegram"
                    value="yes"
                    onClick={() =>
                      setSocialMedia({
                        ...socialMedia,
                        telegram: { hasAccount: true },
                      })
                    }
                  />
                </label>
                <label>
                  no
                  <input
                    type="radio"
                    name="telegram"
                    value="no"
                    onClick={() =>
                      setSocialMedia({
                        ...socialMedia,
                        telegram: { hasAccount: false },
                      })
                    }
                  /></label>
              </td>
            </tr>
            {socialMedia.telegram.hasAccount && (
              <tr>
                <td>Telegram Username</td>
                <td>
                  <InputControl
                    label="Telegram Username"
                    placeholder="Enter your Telegram username"
                    onChange={(event) =>
                      setSocialMedia({
                        ...socialMedia,
                        telegram: {
                          ...socialMedia.telegram,
                          username: event.target.value,
                        },
                      })
                    }
                  />
                </td>
              </tr>)
            }

            {/* Facebook */}
            <tr>
              <td>Do You Have Facebook?</td>
              <td>
                <label>
                  yes
                  <input
                    type="radio"
                    name="facebook"
                    value="yes"
                    onClick={() =>
                      setSocialMedia({
                        ...socialMedia,
                        facebook: { hasAccount: true },
                      })
                    }
                  />
                </label>
                <label>
                  no
                  <input
                    type="radio"
                    name="facebook"
                    value="no"
                    onClick={() =>
                      setSocialMedia({
                        ...socialMedia,
                        facebook: { hasAccount: false },
                      })
                    }
                  /></label>
              </td>
            </tr>
            {socialMedia.facebook.hasAccount && (
              <tr>
                <td>Facebook Username</td>
                <td>
                  <InputControl
                    label="Facebook Username"
                    placeholder="Enter your Facebook username"
                    onChange={(event) =>
                      setSocialMedia({
                        ...socialMedia,
                        facebook: {
                          ...socialMedia.facebook,
                          username: event.target.value,
                        },
                      })
                    }
                  />
                </td>
              </tr>)
            }

            {/* WhatsApp */}
            <tr>
              <td>Do You Have WhatsApp?</td>
              <td>
                <label>
                  yes
                  <input
                    type="radio"
                    name="whatsapp"
                    value="yes"
                    onClick={() =>
                      setSocialMedia({
                        ...socialMedia,
                        whatsapp: { hasAccount: true },
                      })
                    }
                  />
                </label>
                <label>
                  no
                  <input
                    type="radio"
                    name="whatsapp"
                    value="no"
                    onClick={() =>
                      setSocialMedia({
                        ...socialMedia,
                        whatsapp: { hasAccount: false },
                      })
                    }
                  /></label>
              </td>
            </tr>
            {socialMedia.whatsapp.hasAccount && (
              <tr>
                <td>WhatsApp Number</td>
                <td>
                  <InputControl
                    label="WhatsApp Number"
                    placeholder="Enter your WhatsApp number"
                    onChange={(event) =>
                      setSocialMedia({
                        ...socialMedia,
                        whatsapp: {
                          ...socialMedia.whatsapp,
                          number: event.target.value,
                        },
                      })
                    }
                  />
                </td>
              </tr>)}
            
            {/* User Details (as shown in the previous code) */}
            
            {/* Additional User Details */}
            <tr>
              <td>Interests</td>
              <td>
                <InputControl
                  label="Interests"
                  placeholder="Enter your interests"
                  onChange={(event) =>
                    setUserDetails({ ...userDetails, interests: event.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Favorite Books</td>
              <td>
                <InputControl
                  label="Favorite Books"
                  placeholder="Enter your favorite books"
                  onChange={(event) =>
                    setUserDetails({ ...userDetails, favoriteBooks: event.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Favorite Movies</td>
              <td>
                <InputControl
                  label="Favorite Movies"
                  placeholder="Enter your favorite movies"
                  onChange={(event) =>
                    setUserDetails({ ...userDetails, favoriteMovies: event.target.value })
                  }
                />
              </td>
            </tr>
            {/* Add similar sections for other additional user details... */}
          </tbody>
        </table>

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
