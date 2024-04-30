import { css } from '@styled-stytem/css'
import { useAtom, useAtomValue } from 'jotai'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagenation'
import { pageAtom, pageSizeAtom } from '@/lib/store/jotai'

const PageNavBar = () => {
  const [page, setPage] = useAtom(pageAtom)
  const totalPage = useAtomValue(pageSizeAtom)
  return (
    <Pagination>
      <PaginationContent
        className={css({
          display: 'flex',
          w: 'full',
          justifyContent: 'space-between',
          alignSelf: 'stretch'
        })}
      >
        <PaginationItem>
          <PaginationPrevious onClick={() => setPage(p => (p - 1 > 0 ? p - 1 : 1))} />
        </PaginationItem>
        <div
          className={css({
            display: 'flex',
            flexDir: 'row',
            alignItems: 'center',
            gap: 1,
            justifyContent: 'space-between'
          })}
        >
          {Array.from({ length: totalPage > 3 ? 3 : totalPage }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink onClick={() => setPage(index + 1)} isActive={page === index + 1}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          {totalPage > 3 && <PaginationEllipsis />}
        </div>
        <PaginationItem>
          <PaginationNext onClick={() => setPage(p => (p + 1 < totalPage ? p + 1 : totalPage))} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PageNavBar
