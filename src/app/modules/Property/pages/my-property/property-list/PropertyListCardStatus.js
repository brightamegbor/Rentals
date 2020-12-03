import React from 'react';
import {
    Card,
    CardBody,
    CardFooter
} from "../../../../../../_metronic/_partials/controls";
import {
    NoRecordsFoundMessage,
    PleaseWaitMessage
} from "../../../../../../_metronic/_helpers";
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import LaunchOutlined from "@material-ui/icons/LaunchOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import { withStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';


const StyledMenu = withStyles({
    paper: {
        background: '#27788a',
        color: '#fff',
    }
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: 'transparent',
            // '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            //     color: theme.palette.common.white,
            // },
        },
    },
}))(MenuItem);



export function PropertyListCardStatus(props) {
    const { data, propStatus, secStatus, ...rest } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    function openMoreAction(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div {...rest}>
            {data.map((item, index) => (
                <div key={index}>
                    {(item.status === propStatus || item.status === secStatus) && (
                        <Card>
                            <CardBody className="row">
                                <div className="col-3 img-container">
                                    <img alt="property" src={item.photos === "" ? "/media/stcok-900x600/20.jpg" : item.photos[0]} />
                                    {item.status === "pending" && (
                                        <div className="status-top-left status-pending"><small>Pending</small></div>
                                    )}
                                    {item.status === "active" && (
                                        <div className="status-top-left status-active"><small>Active</small></div>
                                    )}
                                    {item.status === "disabled" && (
                                        <div className="status-top-left status-disabled"><small>Disabled</small></div>
                                    )}
                                    {item.status === "disapproved" && (
                                        <div className="status-top-left status-disapproved"><small>Disapproved</small></div>
                                    )}
                                </div>
                                <div className="col-8 font-size-14 pl-8 mt-2">
                                    <h3 className="color-default">{item.propertySubCategory}</h3>
                                    <h6 className="color-custom-gray">{item.propertyAddress}</h6>

                                    <div className="action-links mt-6">
                                        <div className="view-link">
                                            <Link
                                                to={`/property/preview/${item.id}`}

                                            ><LaunchOutlined />View</Link>
                                        </div>
                                        <div className="edit-link">
                                            <p><EditOutlinedIcon />Edit</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-1">
                                    <button
                                        aria-controls="customized-menu"
                                        aria-haspopup="true"
                                        onClick={openMoreAction}
                                        className="btn card-more-action-icon">
                                        <MoreVertRounded />
                                    </button>

                                    <StyledMenu
                                        id="customized-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <StyledMenuItem className="more-action-list-item">
                                            <ListItemIcon>
                                                <LaunchOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary="View" />
                                        </StyledMenuItem>

                                        <StyledMenuItem className="more-action-list-item">
                                            <ListItemIcon>
                                                <AccountCircleOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary="Leads" />
                                        </StyledMenuItem>

                                        <StyledMenuItem className="more-action-list-item">
                                            <ListItemIcon>
                                                <EditOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Edit" />
                                        </StyledMenuItem>

                                        <StyledMenuItem className="more-action-list-item">
                                            <ListItemIcon>
                                                <DeleteOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Delete" />
                                        </StyledMenuItem>

                                        <StyledMenuItem className="more-action-list-item">
                                            <ListItemIcon>
                                                <InsertChartOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Plans & Addons" />
                                        </StyledMenuItem>

                                    </StyledMenu>

                                </div>

                            </CardBody>

                            <CardFooter>
                                <div className="prop-footer-cta">
                                    <div className="property-footer">
                                        <ul className="property-card-footer">
                                            <li className="text-capitalize"><span className="plan">{item.plan}</span></li>
                                            <li><h3>Views</h3> <span>0</span></li>
                                            <li><h3>Leads</h3> <span>0</span></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <a className="btn-br btn-plans">Plans & Addons</a>
                                        <a className="btn-br btn-leads">Leads</a>
                                    </div>
                                </div>
                            </CardFooter>
                            <PleaseWaitMessage entities={data} />
                            <NoRecordsFoundMessage entities={data} />
                        </Card>
                    )}
                </div>
            ))}

        </div>
    )

}