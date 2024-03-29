import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./GameMap.module.css";
import { Circle, Pane } from "react-leaflet";
import { Marker } from "react-leaflet-marker";
import { useGetAllMissionsAPI } from "../Hooks/APIMissions";

const GameMissions = ({ id, gameId }) => {
  const { missions } = useGetAllMissionsAPI(id);
  const location = useLocation();
  const navigate = useNavigate();

  const currentMission = location.state.currentMission;
  const [clickedMission, setClickedMission] = useState(null);
  const [selectedMission, setSelectedMission] = useState(null);

    //ensures missions are being updated every 1 minute
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.requestAnimationFrame(() => {
        setCount((count) => count + 1);
      });
    }, 60000);
    return () => clearTimeout(timeoutId);
  });

  const handleMissionClick = (mission) => {
    navigate("/currentGame", {
      state: { currentGameId: gameId, currentMission: mission },
    });
    setSelectedMission(mission);
  };

  useEffect(() => {
    if (clickedMission !== null) {
      setClickedMission(null);
      location.state = {
        currentGameId: gameId,
        mission: currentMission,
      };
    }
  }, [clickedMission, currentMission, location, location.state]);

  return (
    <div>
      {missions &&
        missions.map((mission, index) => {
          const isSelectedMission =
            selectedMission && selectedMission.title === mission.title;
          const circleColor = isSelectedMission
            ? "yellow"
            : "rgba(50, 197, 57, 0.8)";
          return (
            <Pane zIndex={500} key={index}>
              <Marker position={[mission.latitude, mission.longitude]}>
                <h5
                  className={styles.missionTitle}
                  style={{
                    color:
                      selectedMission && selectedMission.title === mission.title
                        ? "orange"
                        : "limeGreen",
                  }}
                >
                  {mission.title}
                </h5>
              </Marker>
              <Circle
                eventHandlers={{
                  click: () => handleMissionClick(mission),
                }}
                center={[mission.latitude, mission.longitude]}
                radius={mission.radius}
                pathOptions={{ color: circleColor }}
              />
            </Pane>
          );
        })}
    </div>
  );
};

export default GameMissions;
