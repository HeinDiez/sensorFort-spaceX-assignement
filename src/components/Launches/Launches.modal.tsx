import React from 'react';

import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { LaunchModalProps } from './launches.interface';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ScaleIcon from '@mui/icons-material/Scale';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { COMM } from '../../helpers/common';

export default function LaunchesModal({ onClose, open, calculatedLaunch }: LaunchModalProps) {
    const onCloseHandler = () => {
        onClose(false);
    };
    return (
        <div>
            <Dialog scroll="body" maxWidth="md" open={open} onClose={onCloseHandler} classes={{ paper: 'w-100 rounded shadow-sm-dark border-0 bg-white' }}>
                <div className="hero-wrapper bg-composed-wrapper bg-arielle-smile h-100 rounded-top">
                    <div className="flex-grow-1 w-100 d-flex align-items-center">
                        <div className="bg-composed-wrapper--bg bg-second opacity-3 rounded-top" />
                        <div className="bg-composed-wrapper--content text-center pt-5">
                            <div className="text-white">
                                <h1 className="display-3 my-3 font-weight-bold">Energy Consumption</h1>
                                <p className="font-size-lg mb-0 px-4 text-white-50">The estimated total energy usage for the selected launches</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded pt-4 pt-lg-0">
                    <Card className="card-box">
                        <div className="card-header">
                            <div className="card-header--title">
                                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">Launch Mission</h4>
                            </div>
                            <div className="card-header--actions">
                                <div>
                                    <h5 className="font-size-lg mb-0 py-2 text-success">Consumption</h5>
                                </div>
                            </div>
                        </div>
                        <CardContent>
                            {calculatedLaunch.map((claunch) => (
                                <div key={claunch.id}>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-icon-wrapper mr-2">
                                                    <div className="avatar-icon">
                                                        <img alt="..." src={claunch.links && claunch.links.mission_patch_small} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href="#/" onClick={(e) => e.preventDefault()} className="font-weight-bold text-black" title="...">
                                                        {claunch.mission_name}
                                                    </a>
                                                    <span className="text-black-50 d-block">{claunch.rocket.rocket_name}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center">
                                                <ScaleIcon />
                                                <div className="text-right pl-3">
                                                    <span className="font-weight-bold font-size-sm text-black-50">{COMM.formatNumber(claunch.rocket.rocket.mass.kg)} kg</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center">
                                                <LocalGasStationIcon />
                                                <div className="text-right pl-3">
                                                    <span className="font-weight-bold font-size-sm text-black-50">{COMM.formatNumber(claunch.rocket.rocket.second_stage.fuel_amount_tons)} tons</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="font-weight-bold text-success font-size-lg pr-2">{COMM.formatNumber(claunch.energyValue)} </div>
                                            <p className="pt-1 m-0">Joules</p>
                                            <RocketLaunchIcon />
                                        </div>
                                    </div>
                                    <div className="divider my-3" />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </Dialog>
        </div>
    );
}
