import * as React from "react"
import {useSpring, animated} from "@react-spring/web";
import { DarkModeContext } from "../../pages";
import "./theme-toggle.scss";

export const defaultProperties = {
    dark: {
      circle: {
        r: 9,
        fill: "#FFF"
      },
      mask: {
        cx: '50%',
        cy: '23%',
      },
      svg: {
        transform: 'rotate(40deg)',
        color: '#FFF',
      },
      lines: {
        opacity: 0,
        fill: "#FFF"
      },
    },
    light: {
      circle: {
        r: 5,
        fill: "#000"
      },
      mask: {
        cx: '100%',
        cy: '0%',
      },
      svg: {
        transform: 'rotate(90deg)',
        color: '#000',
      },
      lines: {
        opacity: 1,
        fill: "#000"
      },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

type SVGProps = Omit<React.HTMLAttributes<HTMLOrSVGElement>, 'onChange'>;
interface Props extends SVGProps {
checked?: boolean;
style?: React.CSSProperties;
size?: number;
animationProperties?: typeof defaultProperties;
moonColor?: string;
sunColor?: string;
}
export const ThemeToggle: React.FC<Props>  = ({
    children,
    checked = false,
    size = 24,
    animationProperties = defaultProperties,
    moonColor = 'white',
    sunColor = 'black',
    style,
    ...rest
  }) => {
    const context:any = React.useContext(DarkModeContext);

    const properties = React.useMemo(() => {
      if (animationProperties !== defaultProperties) {
        return Object.assign(defaultProperties, animationProperties);
      }
  
      return animationProperties;
    }, [animationProperties]);
  
    const { circle, svg, lines, mask } = properties[checked ? 'dark' : 'light'];
  
    const svgContainerProps = useSpring({
      ...svg,
      config: animationProperties.springConfig,
    });
    const centerCircleProps = useSpring({
      ...circle,
      config: animationProperties.springConfig,
    });
    const maskedCircleProps = useSpring({
      ...mask,
      config: animationProperties.springConfig,
    });
    const linesProps = useSpring({
      ...lines,
      config: animationProperties.springConfig,
    });
  
    const toggle = () => context.saveDarkMode(!checked);
  
    const uniqueMaskId = `circle-mask`;
    
      return (
        <div className='theme-toggle'>
          <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        //color={checked ? moonColor : sunColor}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        onClick={toggle}
        style={{
          cursor: 'pointer',
          ...svgContainerProps,
          ...style,
        }}
        {...rest}
      >
        <mask id={uniqueMaskId}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <animated.circle
            // @ts-ignore
            style={maskedCircleProps}
            r="9"
            fill="black"
          />
        </mask>

        <animated.circle
          cx="12"
          cy="12"
          //fill={checked ? moonColor : sunColor}
          // @ts-ignore
          style={centerCircleProps}
          mask={`url(#${uniqueMaskId})`}
        />
        <animated.g stroke="currentColor" style={linesProps}>
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </animated.g>
      </animated.svg>
    </div>
      );
}

export default ThemeToggle
