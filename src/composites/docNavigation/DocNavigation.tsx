import {
    MiddleContainer,
    NavbarInnerContainer,
    RootContainer,
  } from './styles'
  import { NavLink } from 'react-router-dom'
  import { useContext, useEffect, useState } from 'react'
import { DocNavProps } from './iDocNavigation'
  
  const DocNavigation = ({ uploadCallBackFn }: DocNavProps) => {
    const documentTypes = [
      {
        id: 1,
        documentType: 'CoverageList'
      },
      {
        id: 2,
        documentType: 'ValTable'
      },
      {
        id: 3,
        documentType: 'EquityResearchDirectory'
      },
      {
        id: 4,
        documentType: 'MarketMakerList'
      },
      {
        id: 5,
        documentType: 'UpcomingEvents'
      }
    ]
    const [selectedDocType, setDocType] = useState(1)

    const docTypeChange = (docType: number) => {
      setDocType(docType);
      uploadCallBackFn(docType)
    }
      
    return (
      <RootContainer>
        <NavbarInnerContainer>
          <MiddleContainer>
            <NavLink
              to="#"
              onClick={() => docTypeChange(1)}
              className={(isActive) =>
                'nav-link' + (selectedDocType === 1 ? ' selected' : '')
              }
            >
              Coverage List
            </NavLink>
            <NavLink
              to="#"
              onClick={() => docTypeChange(2)}
              className={(isActive) =>
                'nav-link' + (selectedDocType === 2 ? ' selected' : '')
              }
            >
              Valtable
            </NavLink>
            <NavLink
              to="#"
              onClick={() => docTypeChange(3)}
              className={(isActive) =>
                'nav-link' + (selectedDocType === 3 ? ' selected' : '')
              }
            >
              Equity Research Directory
            </NavLink>
            <NavLink
              to="#"
              onClick={() => docTypeChange(4)}
              className={(isActive) =>
                'nav-link' + (selectedDocType === 4 ? ' selected' : '')
              }
            >
              Market Maker List
            </NavLink>
            <NavLink
              to="#"
              onClick={() => docTypeChange(5)}
              className={(isActive) =>
                'nav-link' + (selectedDocType === 5 ? ' selected' : '')
              }
            >
              Upcoming Events
            </NavLink>
          </MiddleContainer>
        </NavbarInnerContainer>
      </RootContainer>
    )
  }
  
  export default DocNavigation
  