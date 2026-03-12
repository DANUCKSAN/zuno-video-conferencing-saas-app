
import {StreamVideoClient,StreamVideo} from "@stream-io/video-react-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;


 const StreamVideoProvider = ({children}:{children:React.ReactNode}) => {
    return (
    <StreamVideo client={client}>
      {children}
      </StreamVideo>
    )



};
export default StreamVideoProvider;