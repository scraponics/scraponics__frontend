import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { scaleQuantile } from 'd3-scale';

import INDIA_TOPO_JSON from '../../assets/mapData/india.topo.json';
import LinearGradient from './LinearGradient';

// styles
import classes from './IndiaMap.module.css';


const PROJECTION_CONFIG = {
    scale: 350,
    center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
    '#ffedea',
    '#ffcec5',
    '#ffad9f',
    '#ff8a75',
    '#ff5533',
    '#e2492d',
    '#be3d26',
    '#9a311f',
    '#782618'
];

const DEFAULT_COLOR = '#EEE';

const geographyStyle = {
    default: {
        outline: 'none'
    },
    hover: {
        fill: '#ccc',
        transition: 'all 250ms',
        outline: 'none'
    },
    pressed: {
        outline: 'none'
    }
};

// will generate random heatmap data on every call
const getHeatMapData = () => {
    return [
        { id: 'AP', state: 'Andhra Pradesh', value: 80 },
        { id: 'AR', state: 'Arunachal Pradesh', value: 10 },
        { id: 'AS', state: 'Assam', value: 20 },
        { id: 'BR', state: 'Bihar', value: 60 },
        { id: 'CT', state: 'Chhattisgarh', value: 40 },
        { id: 'GA', state: 'Goa', value: 40 },
        { id: 'GJ', state: 'Gujarat', value: 70 },
        { id: 'HR', state: 'Haryana', value: 20 },
        { id: 'HP', state: 'Himachal Pradesh', value: 24 },
        { id: 'JH', state: 'Jharkhand', value: 26 },
        { id: 'KA', state: 'Karnataka', value: 27 },
        { id: 'KL', state: 'Kerala', value: 50 },
        { id: 'MP', state: 'Madhya Pradesh', value: 70 },
        { id: 'MH', state: 'Maharashtra', value: 80 },
        { id: 'MN', state: 'Manipur', value: 10},
        { id: 'ML', state: 'Meghalaya', value: 5 },
        { id: 'MZ', state: 'Mizoram', value: 5 },
        { id: 'NL', state: 'Nagaland', value: 5 },
        { id: 'OR', state: 'Odisha', value: 59 },
        { id: 'PB', state: 'Punjab', value: 70 },
        { id: 'RJ', state: 'Rajasthan', value: 30 },
        { id: 'SK', state: 'Sikkim', value: 10 },
        { id: 'TN', state: 'Tamil Nadu', value: 80 },
        { id: 'TG', state: 'Telangana', value: 60 },
        { id: 'TR', state: 'Tripura', value: 14 },
        { id: 'UT', state: 'Uttarakhand', value: 20 },
        { id: 'UP', state: 'Uttar Pradesh', value: 90 },
        { id: 'WB', state: 'West Bengal', value: 70 },
        { id: 'AN', state: 'Andaman and Nicobar Islands', value: 5 },
        { id: 'CH', state: 'Chandigarh', value: 120 },
        { id: 'DN', state: 'Dadra and Nagar Haveli', value: 5 },
        { id: 'DD', state: 'Daman and Diu', value: 5 },
        { id: 'DL', state: 'Delhi', value: 100 },
        { id: 'JK', state: 'Jammu and Kashmir', value: 10 },
        { id: 'LA', state: 'Ladakh', value: 3 },
        { id: 'LD', state: 'Lakshadweep', value: 4 },
        { id: 'PY', state: 'Puducherry', value: 10 }
    ];
};


const IndiaMap = () => {
    const [tooltipContent, setTooltipContent] = useState('');
    const [data, setData] = useState(getHeatMapData());

    const gradientData = {
        fromColor: COLOR_RANGE[0],
        toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
        min: 0,
        max: data.reduce((max, item) => (item.value > max ? item.value : max), 0)
    };

    const colorScale = scaleQuantile()
        .domain(data.map(d => d.value))
        .range(COLOR_RANGE);

    const onMouseEnter = (geo, current = { value: 'NA' }) => {
        return () => {
            setTooltipContent(`${geo.properties.name}: ${current.value}`);
        };
    };

    const onMouseLeave = () => {
        setTooltipContent('');
    };
    return (
        <div style={{
            display: 'flex',
            justifyContent: "center",
            marginLeft: '300px'
        }}>
            <div className="full-width-height container" style={{
                width: "70%"
            }}>
                <h1 className="no-margin center">Statewise E-waste generation</h1>
                <ReactTooltip>{tooltipContent}</ReactTooltip>
                <ComposableMap
                    projectionConfig={PROJECTION_CONFIG}
                    projection="geoMercator"
                    width={300}
                    height={200}
                    data-tip=""
                >
                    <Geographies geography={INDIA_TOPO_JSON}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                //console.log(geo.id);
                                const current = data.find(s => s.id === geo.id);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                                        style={geographyStyle}
                                        onMouseEnter={onMouseEnter(geo, current)}
                                        onMouseLeave={onMouseLeave}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ComposableMap>
                <LinearGradient data={gradientData} />
            </div>
        </div>
    )
}

export default IndiaMap