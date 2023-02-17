import classes from './Layout.module.scss'
import Navigation from './Navigation/Navigation';
function Layout (props){
return (<>
<Navigation></Navigation>
    <main className={classes.wrapper}>{props.children}</main>
</>
)

}
export default Layout;