import ReactWeather, { useOpenWeather } from 'react-open-weather';
// import './weather.css'
// import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'


export const FloridaWeather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'cf95228144b34140c4ec84b5348b60dc',
    lat: '27.6648',
    lon: '81.5158',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial),
    showForecast: 'false',
  });
  return (
    <Playah>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Florida"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      />
    </Playah>
  );
};

export const BremenWeather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'cf95228144b34140c4ec84b5348b60dc',
    lat: '53.073635',
    lon: '8.806422',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <Playah>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Bremen"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      />
    </Playah>
  );
};

export const AthensWeather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'cf95228144b34140c4ec84b5348b60dc',
    lat: '37.9838',
    lon: '23.7275',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <Playah>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Athens"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      />
    </Playah>
  );
};

export const VictoriaWeather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'cf95228144b34140c4ec84b5348b60dc',
    lat: '37.4713',
    lon: '144.7852',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <Playah>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Victoria"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      />
    </Playah>
  );
};

export const AucklandWeather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'cf95228144b34140c4ec84b5348b60dc',
    lat: '36.8509',
    lon: '174.7645',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <Playah>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Auckland"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      />
    </Playah>
  );
};

export const JiangsuWeather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'cf95228144b34140c4ec84b5348b60dc',
    lat: '33.1402',
    lon: '119.7889',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <Playah>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Jiangsu"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      />
    </Playah>
  );
};

export const ShanghaiWeather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'cf95228144b34140c4ec84b5348b60dc',
    lat: '31.2304',
    lon: '21.4737',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <Playah>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Shanghai"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      />
    </Playah>
  );
};

const Playah = styled.div`
  .daysPanel-1-2-29 {
    display: none!important;
  }
  .info-1-2-14 {
    display: none;
  }
  .main-1-2-2 {
    display: flex;
  }
  .header-1-2-3 {
    font-size: 18px;
    letter-spacing: 1.4px;
  }
  .hr-1-2-15 {
    display: none;
  }
  .left-1-2-4 {
    width: 100%;
    padding: 12px 16px 12px 12px;
  }
  .right-1-2-5 {
    width: unset;
  }
  .current-1-2-11 {
    font-size: 20px;
    padding-top: 4px;
    margin-top: 2px;
    border-top: 1px solid #ffffff73;
  }
  .desc-1-2-13 {
    font-size: 14px,
  }
  svg {
    max-width: 42px;
  }
`