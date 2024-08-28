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
    <Breadcrumb className="sm:p-2 py-2">
      <BreadcrumbList className="sm:text-lg text-base">
        {list.map((item, index) => {
          var itemName = ReverseKebab(item);
          if (itemName === "Cnc Work") {
            itemName = "CNC Work";
          } else if (itemName === "3 D 2 D Work") {
            itemName = "3D/2D Work";
          }
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
                  <BreadcrumbPage className="text-primary-2">
                    <strong>{itemName}</strong>
                  </BreadcrumbPage>
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
