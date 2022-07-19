import React from 'react'
import ParticleBackground from 'react-particle-backgrounds'
import styled from 'styled-components';

const LogoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: 1;
    position: fixed;

    img {
        height: 400px;
        display: flex;
        margin-top: 200px;

        @media screen and (max-width:800px) {
            margin-top: 150px;
            margin-left: 35px;
        }
    }
`

const ParticleComponent = function() {
  const settings = {
    background: {
        color: {
            value: '#000000'
        }
    },
    canvas: {
        canvasFillSpace: true,
        useBouncyWalls: true,
      },
      particle: {
        particleCount: 200,
        color: '#A501EB',
        minSize: 2,
        maxSize: 15
      },
      velocity: {
        directionAngle: 0,
        directionAngleVariance: 360,
        minSpeed: 0.2,
        maxSpeed: 1
      },
      opacity: {
        minOpacity: 0,
        maxOpacity: 0.5,
        opacityTransitionTime: 7000
      }
    }

  return (
    <>
        <ParticleBackground 
            style={{
                backgroundColor: "black",
                width: "100%",
                zIndex: "0",
            }}
            settings={settings}
        />
    </>
  )
}

export default ParticleComponent;