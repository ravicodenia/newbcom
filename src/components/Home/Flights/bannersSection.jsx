import React from 'react';
import Grid from '@material-ui/core/Grid';


function BannerSection() {
  return (
    <section className="banner-sec py-3"> 
        <div className='container'>

            <Grid container>
                <Grid item xs={6} className='padding-right'>
                    <Grid container>
                        <Grid xs={12}>
                        <img src="/imgs/promo-img.png" alt="imgs" srcset="" className='border-1' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} className='padding-left'>
                    <Grid container>
                            <Grid xs={12} className='mb-3 px-3'>
                            <img src="/imgs/flights-promo-img.png" alt="imgs" srcset=""className='border-1'  />

                            </Grid>
                            <Grid xs={6} className='px-3' >
                            <img src="/imgs/dubai.png" alt="imgs" srcset="" className='border-1' />

                            </Grid>
                            <Grid xs={6} className='px-3'>
                            <img src="/imgs/cairo.png" alt="imgs" srcset="" className='border-1' />

                            </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </div>
    </section>

  );
}

export default BannerSection;
