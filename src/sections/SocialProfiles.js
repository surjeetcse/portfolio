import React, {Component} from 'react';
import socialProfilesData from './../data/socialProfilesData';

class SocialProfiles extends Component {
    render(){
        // console.log("this.props", this.props);
        const {image,link} = this.props.socialProfile;
     return(
        <span>
            <a href={link}><img src={image} alt="socialimage" style={{ width: 50, height: 50,margin:10 }}></img></a>
        </span>
        )
    }
}

class SOCIAL_PROFILES extends Component{
    render(){
        return(
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        socialProfilesData.map((SOCIAL_PROFILE)=>{
                            return <SocialProfiles key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                        })
                    }
                </div>
            </div>
        );
    };
}
export default SOCIAL_PROFILES;