import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import axios from 'axios';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [dataFromApi, setDataFromApi] = useState({
        Topemission: {
            Hltcl: '33',
            spinning: '28',
            carding: '23',
            transportation: '25'
        },
        carbonFootprint: '2,412,314t',
        Id: 'id123',
        EmissionbyTransportation: '361,874t',
        EmissionsbySpinning: '723,694t',
        Emissionbycarding: '241,231'
    });
    useEffect(() => {
        async function getData() {
            var api = 'https://rnznbnt3p5.execute-api.ap-south-1.amazonaws.com/api/all_carbonfootprint';
            await axios.get(api).then((res) => {
                if (res.data['body-json']['statusCode'] !== 200) return setLoading(false);
                // console.warn(res.data['body-json']['body']['Item']);
                setDataFromApi(res.data['body-json']['body']['Item']);
                setLoading(false);
            });
        }

        getData();
        // console.warn(dataFromApi.EmissionbyTransportation);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} emissionData={dataFromApi.EmissionbyTransportation} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
