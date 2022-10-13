import { ReactEventHandler, useContext, useEffect, useState } from 'react'
import Label from '../../components/label/Label'
import SearchBar from '../../components/searchBar/SearchBar'
import { SvgWarning } from '../../components/svg/SvgChevron'
import {
  WDStyledDocumentsText,
  WDStyledWidgetSubHeading,
} from '../../components/ui/WDTypography'
import { HoldingsContext } from '../../services/holdingsContext/HoldingsContext'

import {
  ErrorMessageWrapper,
  LeftWrapper,
  ListWrapper,
  RightWrapper,
  SearchListItemWrapper,
  SearchListWrapper,
  StyledDiv,
  Wrapper,
} from './styles'

export const OrderEntrySearch = ({ setSearchedData }: any) => {
  const { householdStocksAndRelated } = useContext<any>(HoldingsContext)
  const [showList, setShowList] = useState(false)
  const [inputQuery, setInputQuery] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const searchItems = (searchValue: any) => {
    setInputQuery(searchValue)
    const filterArray: any = []
    if (inputQuery !== '') {
      householdStocksAndRelated.filter((item: any) => {
        if (item.description.includes(inputQuery.toUpperCase()) === true || item.tickerSymbol.includes(inputQuery.toUpperCase()) === true) {
          return filterArray.push(item)
        }
      })
      setFilteredResults(filterArray)
      console.log('filter', filterArray)
    } else {
      setFilteredResults(householdStocksAndRelated)
    }
  }
  const getHighlightedText = (text:string, highlight:string)=> {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span> { parts.map((part:any, i:number) => 
        <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: 700 } : {} }>
            { part }
        </span>)
    } </span>;
}
  useEffect(() => {
    if (inputQuery === '') {
      setShowList(false)
    } else {
      setShowList(true)
      setSearchedData(filteredResults)
    }
    searchItems(inputQuery)
  }, [inputQuery])
  return (
    <Wrapper>
      <WDStyledDocumentsText>
        <Label> What do you want to trade?</Label>
      </WDStyledDocumentsText>
      <SearchBar
        placeHolder="Company or Symbol"
        onChange={(query: string) => {
          setInputQuery(query)
          setSearchedData(filteredResults)
        }}
        handleSearch={() => {
          searchItems(inputQuery)
          setSearchedData(filteredResults)
        }}
      />
      {showList && (
        <>
          {filteredResults.length === 0 ? (
            <ErrorMessageWrapper>
              <SvgWarning fillColor={'#F97316'} />
              <Label>{'The Symbol you entered is invalid or not found'}</Label>
            </ErrorMessageWrapper>
          ) : (
            <SearchListWrapper>
              {filteredResults?.map((item: any, index: number) => {
                return (
                  <SearchListItemWrapper key={index}>
                    <WDStyledWidgetSubHeading>
                      <ListWrapper>
                        <LeftWrapper>
                          <StyledDiv id="inputText">
                            {getHighlightedText(item.tickerSymbol,inputQuery)}
                          </StyledDiv>
                          <StyledDiv>
                             {getHighlightedText(item.description,inputQuery)}
                          </StyledDiv>
                        </LeftWrapper>
                        <RightWrapper>{item.currentValue}</RightWrapper>
                      </ListWrapper>
                    </WDStyledWidgetSubHeading>
                  </SearchListItemWrapper>
                )
              })}
            </SearchListWrapper>
          )}
        </>
      )}
    </Wrapper>
  )
}
