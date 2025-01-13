import Snowfall from "react-snowfall";

const SnowfallBG = ({ snowColor }) => {
    return (
        <Snowfall
            // Changes the snowflake color
            color={snowColor}
            //   Mange the radius of the snow dit
            radius={[0.5, 0.8]}
            // Controls the number of snowflakes that are created (default 150)
            snowflakeCount={50}
        />
    );
};

export default SnowfallBG;
