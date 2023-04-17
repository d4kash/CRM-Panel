import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import Chart from 'react-apexcharts';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import PieChartComponent from './chart-data/pieChart';
// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const options = { labels: ['Spinning', 'Transportation', 'Carding', 'Heating & Cooling'] };
    const series = [33, 28, 23, 25]; //our data
    let [data, setData] = useState({
        Topemission: {
            Hltcl: '33',
            spinning: '28',
            carding: '23',
            transportation: '25'
        },
        carbonFootprint: '2,412,314t',
        Id: 'id123',
        EmissionbyTransportation: '',
        EmissionsbySpinning: '723,694t',
        Emissionbycarding: '241,231'
    });
    useEffect(() => {
        async function getData() {
            var api = 'https://rnznbnt3p5.execute-api.ap-south-1.amazonaws.com/api/all_carbonfootprint';
            await axios.get(api).then((res) => {
                // if (res.data['body-json']['statusCode'] != 200) return setLoading(false);
                // console.warn(res.data['body-json']['body']['Item']);
                setData(res.data['body-json']['body']['Item']);
                // setLoading(false);
            });
        }

        getData();
        // console.warn(data.EmissionbyTransportation);
    }, []);
    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    {/* <CardContent> */}
                    {/* <PieChartComponent /> */}
                    <Chart options={options} series={series} type="donut" width="380" />
                    {/* </CardContent> */}
                </MainCard>
            )}
        </>
    );
};

PopularCard.propTypes = {
    isLoading: PropTypes.bool
};

export default PopularCard;
