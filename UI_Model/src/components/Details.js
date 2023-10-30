import React, { useState } from "react";
import InputControl from "./InputControl";
import styles from "./Signup.module.css";
function Details() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

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
    NotificationPreferences: "",
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


  const getdata = async (e) => {
    const { name,
      email,
      pass } = values;
    const { topicsOfInterest,
      preferredLanguage,
      location,
      demographics,
      age,
      gender,
      politicalAffiliation,
      dataSharingPreferences,
      NotificationPreferences,
      expertise,
      uiPreferences,
      dataPrivacyConsent,
      feedback,
      trainingInterest,
      supportNeeds,
      interests,
      favoriteBooks,
      favoriteMovies,
      hobbies,
      jobTitle,
      educationLevel,
      incomeRange } = userDetails;
    e.preventDefault();
    const res = await fetch("https://smartindiahack-31508-default-rtdb.firebaseio.com/userData.json",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        pass,
        topicsOfInterest,
        preferredLanguage,
        location,
        demographics,
        age,
        gender,
        politicalAffiliation,
        dataSharingPreferences,
        NotificationPreferences,
        expertise,
        uiPreferences,
        dataPrivacyConsent,
        feedback,
        trainingInterest,
        supportNeeds,
        interests,
        favoriteBooks,
        favoriteMovies,
        hobbies,
        jobTitle,
        educationLevel,
        incomeRange
      })
    })
    console.log(res)
    if(res)
    {
      alert("data saved")
    }
    else
    {
      alert("error occured")
    }

  }

  return (
    <form method="POST">
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>
          One More Step To Go !!! Please kindly fill the Details
        </h1>
        
          {/* Table Layout for Questions and Inputs */}
          <table className={styles.tableLayout}>
            <tbody>
              {/* User Details */}
              <tr>
                <td>Full Name</td>
                <td>
                  <InputControl

                    placeholder="Enter your full name"
                    onChange={(event) =>
                      setValues({ ...values, name: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Email Address</td>
                <td>
                  <InputControl

                    placeholder="Enter your email address"
                    onChange={(event) =>
                      setValues({ ...values, email: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <InputControl

                    placeholder="Enter your password"
                    type="password"
                    onChange={(event) =>
                      setValues({ ...values, pass: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Topics Of Interest</td>
                <td>
                  <InputControl

                    placeholder="Enter your interests"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, topicsOfInterest: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Preferred Language</td>
                <td>
                  <InputControl

                    placeholder="Enter your PreferredLanguage"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, preferredLanguage: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Location</td>
                <td>
                  <InputControl

                    placeholder="Enter your Location"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, location: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Demographics</td>
                <td>
                  <InputControl

                    placeholder="Enter your Demographics"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, demographics: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Age</td>
                <td>
                  <InputControl

                    placeholder="Enter your Age"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, age: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>
                  <InputControl

                    placeholder="Enter your Gender"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, gender: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Political Affiliation</td>
                <td>
                  <InputControl

                    placeholder="Enter your Political Affiliation"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, politicalAffiliation: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>DataSharing Preferences</td>
                <td>
                  <InputControl

                    placeholder="Enter your DataSharing Preferences"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, dataSharingPreferences: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Notification Preferences</td>
                <td>
                  <InputControl

                    placeholder="Enter your Notification Preferences"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, NotificationPreferences: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Expertise</td>
                <td>
                  <InputControl

                    placeholder="Enter your Expertise"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, expertise: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Ui Preferences</td>
                <td>
                  <InputControl

                    placeholder="Enter your Ui Preferences"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, uiPreferences: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>DataPrivacy Consent</td>
                <td>
                  <InputControl

                    placeholder="Enter your DataPrivacy Consent"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, dataPrivacyConsent: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Feedback</td>
                <td>
                  <InputControl

                    placeholder="Enter your Feedback"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, feedback: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Training Interest</td>
                <td>
                  <InputControl

                    placeholder="Enter your Training Interest"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, trainingInterest: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Support Needs</td>
                <td>
                  <InputControl

                    placeholder="Enter your Support Needs"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, supportNeeds: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Interests</td>
                <td>
                  <InputControl

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

                    placeholder="Enter your favorite movies"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, favoriteMovies: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Hobbies</td>
                <td>
                  <InputControl

                    placeholder="Enter your hobbies"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, hobbies: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Job Title</td>
                <td>
                  <InputControl

                    placeholder="Enter your job title"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, jobTitle: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Education Level</td>
                <td>
                  <InputControl

                    placeholder="Enter your education level"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, educationLevel: event.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Income Range</td>
                <td>
                  <InputControl

                    placeholder="Enter your income range"
                    onChange={(event) =>
                      setUserDetails({ ...userDetails, incomeRange: event.target.value })
                    }
                  />
                </td>
              </tr>
              {/* Social Media Platforms */}
              <tr>
                <td>Do You Have Instagram?</td>
                <td>
                  <label>
                    Yes
                    <input
                      type="radio"
                      name="instagram"
                      value="Yes"
                      onClick={() =>
                        setSocialMedia({
                          ...socialMedia,
                          instagram: { hasAccount: true },
                        })
                      }
                    />
                  </label>
                  <label>
                    No
                    <input
                      type="radio"
                      name="instagram"
                      value="No"
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

              {/* Twitter */}
              <tr>
                <td>Do You Have Twitter?</td>
                <td>
                  <label>
                    Yes
                    <input
                      type="radio"
                      name="twitter"
                      value="Yes"
                      onClick={() =>
                        setSocialMedia({
                          ...socialMedia,
                          twitter: { hasAccount: true },
                        })
                      }
                    />
                  </label>
                  <label>
                    No
                    <input
                      type="radio"
                      name="twitter"
                      value="No"
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
                    Yes
                    <input
                      type="radio"
                      name="snapchat"
                      value="Yes"
                      onClick={() =>
                        setSocialMedia({
                          ...socialMedia,
                          snapchat: { hasAccount: true },
                        })
                      }
                    />
                  </label>
                  <label>
                    No
                    <input
                      type="radio"
                      name="snapchat"
                      value="No"
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
                    Yes
                    <input
                      type="radio"
                      name="telegram"
                      value="Yes"
                      onClick={() =>
                        setSocialMedia({
                          ...socialMedia,
                          telegram: { hasAccount: true },
                        })
                      }
                    />
                  </label>
                  <label>
                    No
                    <input
                      type="radio"
                      name="telegram"
                      value="No"
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
                    Yes
                    <input
                      type="radio"
                      name="facebook"
                      value="Yes"
                      onClick={() =>
                        setSocialMedia({
                          ...socialMedia,
                          facebook: { hasAccount: true },
                        })
                      }
                    />
                  </label>
                  <label>
                    No
                    <input
                      type="radio"
                      name="facebook"
                      value="No"
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
                    Yes
                    <input
                      type="radio"
                      name="whatsapp"
                      value="Yes"
                      onClick={() =>
                        setSocialMedia({
                          ...socialMedia,
                          whatsapp: { hasAccount: true },
                        })
                      }
                    />
                  </label>
                  <label>
                    No
                    <input
                      type="radio"
                      name="whatsapp"
                      value="No"
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
                </tr>)
              }

            </tbody>
          </table>

          <div className={styles.footer}>
            <button onClick={getdata}>
              Submit
            </button>
          </div>

      </div>
    </div>
    </form>
  );
}

export default Details;
