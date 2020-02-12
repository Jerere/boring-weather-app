let weather = undefined;

export default function Detect(props)  {

    if (props >= 200 && props <= 232) {
        weather = "thunder";
    }
    else if (props >= 300 && props <= 321) {
        weather = "drizzle";
    }
    else if (props >= 500 && props <= 531) {
        weather = "rain";
    }
    else if (props >= 600 && props <= 622) {
        weather = "snow";
    }
    else if (props === 701 || props === 741) {
        weather = "fog";
    }
    else if (props === 800) {
        weather = "clear";
    }
    else if (props === 801 || props === 802) {
        weather = "part_cloud";
    }
    else if (props === 803 || props === 804) {
        weather ="cloud";
    }
    else {weather = "windy"}

    return weather;
}