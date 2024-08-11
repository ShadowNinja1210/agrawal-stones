import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ReverseKebab } from "@/lib/function-store";
import { Fragment } from "react";

export default function CustomBreadCrumb({ list }: { list: string[] }) {
  return (
    <Breadcrumb className="p-2">
      <BreadcrumbList>
        {list.map((item, index) => {
          const itemName = ReverseKebab(item);
          const itemUrl =
            index === 1
              ? "/" + item
              : index === 2
              ? "/services/" + item
              : index === 3
              ? "/services/" + list[index - 1] + "/" + item
              : index === 4 && "/services/" + list[index - 2] + "/" + list[index - 1] + "/" + item;

          return (
            index != 0 &&
            (index === list.length - 1 ? (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbPage>{itemName}</BreadcrumbPage>
                </BreadcrumbItem>
              </Fragment>
            ) : (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={itemUrl as string}>{itemName}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            ))
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
