import motor from '../../../images/yamahamoto.webp'
import googlePlay from "../../../images/googleplay.png";
import appStore from "../../../images/appstore.png"

const MyrideApp = () => {
  return (
    <div className="md:grid grid-cols-2 items-center">
      <div className="md:w-[320px] place-self-center">
        <h4 className="uppercase text-slate-600 md:text-[1.3rem] font-semibold">
          the myride app
        </h4>
        <h2 className="uppercase text-[1.7rem] md:text-[2.2rem] font-semibold">
          discover
        </h2>
        <p className="text-[1.1rem] my-5">
          The app offers you ways to enrich your riding experience, no matter
          the bike you ride. See your riding stats, remember where you went and
          explore where to go. MyRide has been created with you in mind, the
          rider.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <img
            src={appStore}
            width={140}
            height={40}
            alt="appstore button"
          />
          <img
            src={googlePlay}
            width={160}
            height={40}
            alt="googleplay button"
          />
        </div>
      </div>
      <img
        src={motor}
        className="w-[700px] h-[700px] object-cover hidden md:block"
        alt="man on motocycle"
      />
    </div>
  );
};

export default MyrideApp;
