import "./App.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTrackingList } from "./redux/reducer";
import Navbar from "./components/Navbar";
import CreateJob from "./components/CreateJob";
import JobList from "./components/JobList";

function App() {
  const trackingList = useSelector((state) => state.appReducer.trackingList);
  const dispatch = useDispatch();
  // Proje açıldığında trackingList'i local storage'dan alıyoruz.
  useEffect(() => {
    const trackingList = JSON.parse(localStorage.getItem("trackingList"));
    if (trackingList) {
      dispatch(updateTrackingList(trackingList));
    }
  }, []);
  //Localstorage'da trackingList'i güncelliyoruz.
  useEffect(() => {
    localStorage.setItem("trackingList", JSON.stringify(trackingList));
  }, [trackingList]);
  return (
    <div className="App">
      <Navbar />
      <CreateJob />
      <JobList/>
    </div>
  );
}
export default App;
