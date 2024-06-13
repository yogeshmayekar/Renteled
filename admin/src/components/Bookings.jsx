import React, {useState} from 'react';
import {
    useTable,
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect,
    useSortBy,
  } from "react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/ui/button"
import { Checkbox } from "@/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/ui/dropdown-menu";
  import { Input } from "@/ui/input"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/ui/table"

  const data = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },
  ]
  

  export const columns = [
    {
      id: "select",
      Header: ({ getToggleAllPageRowsSelectedProps }) => (
        <Checkbox {...getToggleAllPageRowsSelectedProps()} aria-label="Select all" />
      ),
      Cell: ({ row }) => (
        <Checkbox
          {...row.getToggleRowSelectedProps()}
          aria-label="Select row"
        />
      ),
      disableSortBy: true,
      disableFilters: true,
    },
    {
      accessor: "status",
      Header: "Status",
      Cell: ({ value }) => <div className="capitalize">{value}</div>,
    },
    {
      accessor: "email",
      Header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSortBy(!column.isSortedDesc)}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      Cell: ({ value }) => <div className="lowercase">{value}</div>,
    },
    {
      accessor: "amount",
      Header: () => <div className="text-right">Amount</div>,
      Cell: ({ value }) => {
        const amount = parseFloat(value)
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
        return <div className="text-right font-medium">{formatted}</div>
      },
    },
    {
      id: "actions",
      disableFilters: true,
      Cell: ({ row }) => {
        const payment = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

function Bookings() {
    const [filterInput, setFilterInput] = useState("")
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        setFilter,
        toggleHideColumn,
        state: { selectedRowIds },
        allColumns,
        getToggleHideAllColumnsProps,
        prepareRow,
        canPreviousPage,
        canNextPage,
      } = useTable(
        {
          columns,
          data,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect
      )
    
      const handleFilterChange = (e) => {
        const value = e.target.value || undefined
        setFilter("email", value)
        setFilterInput(value)
      }    
    

  return (
    <>

    {/* booking data table starts  */}
    <div className='border m-4'>
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder="Filter emails..."
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem {...getToggleHideAllColumnsProps()}>
              Toggle All
            </DropdownMenuCheckboxItem>
            {allColumns.map(column => (
              <DropdownMenuCheckboxItem
                key={column.id}
                {...column.getToggleHiddenProps()}
                className="capitalize"
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table {...getTableProps()}>
          <TableHeader>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TableHead {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody {...getTableBodyProps()}>
            {page.length ? (
              page.map(row => {
                prepareRow(row)
                return (
                  <TableRow {...row.getRowProps()} data-state={row.isSelected && "selected"}>
                    {row.cells.map(cell => (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {Object.keys(selectedRowIds).length} of {page.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Bookings;